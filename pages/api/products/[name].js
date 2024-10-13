import multer from 'multer';
import fs from 'fs';
import { Product } from '@/lib/sequilize';
import path from 'path';
import { promisify } from 'util';

const unlinkAsync = promisify(fs.unlink);

// Set up multer for handling image uploads
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads/',
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
    })
});

// Disable default body parser to work with multer
export const config = {
    api: {
        bodyParser: false,
    },
};

// Image upload handler
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    const { name } = req.query;
    if (req.method === 'GET') {
        // Handle GET request - Fetch product by ID
        try {
            const product = await Product.findOne({ where: { name } });            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    } else if (req.method === 'PUT') {
        // Handle PUT request - Update product by ID
        const { id } = req.query;
        const { name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular, existingImage } = req.body;

        await runMiddleware(req, res, upload.single('image')); // Handle file upload

        const newImage = req.file ? req.file.filename : existingImage;

        try {
            const product = await Product.findByPk(id);
            if (product) {
                const oldImage = product.image;

                // Update product
                await product.update({ name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular, image: newImage });

                // Remove old image if different
                if (newImage !== oldImage && oldImage) {
                    await unlinkAsync(path.join('./public/uploads/', oldImage));
                }

                res.status(200).json({ message: 'Product updated' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to update product' });
        }
    } else if (req.method === 'DELETE') {
        // Handle DELETE request - Delete product by ID
        const { id } = req.query;
        try {
            const product = await Product.findByPk(id);
            if (product) {
                const imagePath = path.join('./public/uploads', product.image);
                if (fs.existsSync(imagePath)) {
                    await unlinkAsync(imagePath);
                }
                await product.destroy();
                res.status(200).json({ message: 'Product and image deleted' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete product' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
