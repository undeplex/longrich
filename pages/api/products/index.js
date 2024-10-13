import multer from 'multer';
import { Product } from '@/lib/sequilize';
// import { Product } from '@/lib/sequelize';
import { promisify } from 'util';
import { Op } from 'sequelize';

// Multer setup for file uploads
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads/',
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
    }),
});

// Promisify the multer middleware to use async/await
const uploadMiddleware = promisify(upload.single('image'));

// Helper function to disable Next.js body parser for file uploads
export const config = {
    api: {
        bodyParser: false, // Required for multer to handle file uploads
    },
};

export default async function handler(req, res) {
    // Handle GET requests (fetch products)
    if (req.method === 'GET') {
        const { search = '', category = '', subCategory = '', sort = 'name_asc', page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;
        let order = [['name', 'ASC']];

        if (sort === 'name_desc') order = [['name', 'DESC']];
        if (sort === 'price_asc') order = [['price', 'ASC']];
        if (sort === 'price_desc') order = [['price', 'DESC']];

        try {
            const whereClause = {
                name: { [Op.like]: `%${search}%` },
                ...(category && { category }),
                ...(subCategory && { subCategory })
            };

            const { rows, count } = await Product.findAndCountAll({
                where: whereClause,
                order,
                offset: parseInt(offset),
                limit: parseInt(limit)
            });

            res.json({
                products: rows,
                totalPages: Math.ceil(count / limit)
            });
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }

    // Handle POST requests (create product)
    else if (req.method === 'POST') {
        try {
            // Handle file upload with multer
            await uploadMiddleware(req, res);

            const { name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular } = req.body;
            const image = req.file ? req.file.filename : null;

            // Create the product in the database
            const product = await Product.create({
                name,
                price,
                priceDiscount,
                detail,
                description,
                keywordSearch,
                category,
                subCategory,
                isPopular,
                image
            });

            res.json(product);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create product' });
        }
    }

    // Handle unsupported HTTP methods
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
