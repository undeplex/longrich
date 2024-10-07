const express = require('express');
const multer = require('multer');
const path = require('path');
const { Op } = require('sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database setup
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    priceDiscount: { type: DataTypes.FLOAT, allowNull: true }, // New field
    detail: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true }, // New field
    keywordSearch: { type: DataTypes.STRING, allowNull: true }, // New field
    category: { type: DataTypes.STRING, allowNull: false }, // New field

    subCategory: { type: DataTypes.STRING, allowNull: true }, // New field
    isPopular: { type: DataTypes.STRING, allowNull: true }, // New field

    image: { type: DataTypes.STRING, allowNull: false }
});

// Review Model
const Review = sequelize.define('Review', {
    productId: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

const Order = sequelize.define('Order', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    items: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});


// AdminMessage model
const AdminMessage = sequelize.define('AdminMessage', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  });
  
  // CommunityMember model
  const CommunityMember = sequelize.define('CommunityMember', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joinedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  });

module.exports = Order;





// Initialize database
sequelize.sync();

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });







app.get('/producty', async (req, res) => {
    const { keywordsearch, isPopular, subCategory } = req.query;

    try {
        let whereClause = {};
        if (keywordsearch) {
            const keywords = keywordsearch.split(' ').map(keyword => `%${keyword}%`);
            whereClause = {
                ...whereClause,
                keywordsearch: {
                    [Sequelize.Op.or]: keywords.map(keyword => ({
                        [Sequelize.Op.like]: keyword
                    }))
                }
            };
        }
        if (isPopular) {
            whereClause = { ...whereClause, isPopular };
        }
        if (subCategory) {
            whereClause = { ...whereClause, subCategory };
        }
        

        const products = await Product.findAll({ where: whereClause });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


  
app.get('/products', async (req, res) => {
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
});



app.get('/categories', async (req, res) => {
    try {
        const categories = await Product.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category']
            ]
        });
        res.json(categories.map(cat => cat.category));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});


app.post('/products', upload.single('image'), async (req, res) => {
    try {
        const { name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular } = req.body;
        const image = req.file ? req.file.filename : null;

        const product = await Product.create({ name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular, image });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (product) {
            const imagePath = path.join(__dirname, 'uploads', product.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // Delete image from server
            }

            await product.destroy();
            res.json({ message: 'Product and image deleted' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});





app.put('/products/:id', upload.single('image'), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular, existingImage } = req.body;
        const newImage = req.file ? req.file.filename : existingImage;

        const product = await Product.findByPk(id);

        if (product) {
            const oldImage = product.image;

            // Update product details
            await product.update({
                name, price, priceDiscount, detail, description, keywordSearch, category, subCategory, isPopular, image: newImage
            });

            // Delete the old image if it has changed and isn't used by other products
            if (newImage !== oldImage) {
                const productsWithOldImage = await Product.findAll({ where: { image: oldImage } });
                if (productsWithOldImage.length === 0 && oldImage) {
                    const oldImagePath = path.join(__dirname, 'uploads', oldImage);
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                    }
                }
            }

            res.json({ message: 'Product updated' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});






//Review endpoint

app.get('/reviews/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.findAll({
            where: { productId, approved: true }
        });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});


app.post('/reviews/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, email, comment, rating } = req.body;

        const review = await Review.create({
            productId,
            name,
            email,
            comment,
            rating,
            approved: false
        });

        res.status(201).json({ message: 'Review submitted', review });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit review' });
    }
});
app.get('/admin/reviews', async (req, res) => {
    try {
        const reviews = await Review.findAll({ where: { approved: false } });
        res.json({ reviews });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});


app.post('/reviews', async (req, res) => {
    try {
        const { productId, name, email, comment, rating } = req.body;
        const review = await Review.create({ productId, name, email, comment, rating, approved: false });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit review' });
    }
});

// Endpoint to fetch reviews (e.g., for admin approval or display approved reviews)
app.get('/reviews', async (req, res) => {
    try {
        const { productId, approved = true } = req.query;
        const reviews = await Review.findAll({ where: { productId, approved } });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

// Endpoint to fetch all reviews for a specific product
app.get('/product/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.findAll({ where: { productId, approved: true } });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

app.delete('/review/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk(id);
        if (review) {
            await review.destroy();
            res.status(200).json({ message: 'Review deleted' });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete review' });
    }
});
app.get('/:id/review-count', async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Review.count({ where: { productId: id, approved: true } });
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get review count' });
    }
});

app.patch('/admin/reviews/approve/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk(id);
        if (review) {
            review.approved = true;
            await review.save();
            res.json({ message: 'Review approved' });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to approve review' });
    }
});



app.get('/unused-images', async (req, res) => {
    try {
        const allFiles = fs.readdirSync('uploads');
        const products = await Product.findAll();
        const usedImages = products.map(product => product.image);
        const unusedImages = allFiles.filter(file => !usedImages.includes(file));
        res.json(unusedImages);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch unused images' });
    }
});

app.delete('/unused-images/:image', (req, res) => {
    try {
        const { image } = req.params;
        fs.unlinkSync(path.join(__dirname, 'uploads', image));
        res.json({ message: 'Image deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete image' });
    }
});


app.get('/products/search', async (req, res) => {
    const { keyword } = req.query;
    try {
        const products = await Product.findAll({
            where: {
                keywordSearch: {
                    [Op.like]: `%${keyword}%`
                }
            }
        });
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



app.post('/orders', async (req, res) => {
    try {
        const { name, email, address, items } = req.body;
        const order = await Order.create({ name, email, address, items });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Order.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
});



app.post('/admin/messages', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      await AdminMessage.create({ name, email, message });
      res.status(201).json({ message: 'Message sent to admin' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
  
  // POST /community/join
  app.post('/community/join', async (req, res) => {
    try {
      const { name, email } = req.body;
      await CommunityMember.create({ name, email });
      res.status(201).json({ message: 'Joined the community' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to join the community' });
    }
  });
  
  // GET /admin/messages
  app.get('/admin/messages', async (req, res) => {
    try {
      const messages = await AdminMessage.findAll();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });
  
  // GET /community/members
  app.get('/community/members', async (req, res) => {
    try {
      const members = await CommunityMember.findAll();
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch community members' });
    }
  });








// ------------------------------------------------------------------------------
// UNDER I'MMA HAVE SOME STRIGHTUP TEST TO GET NEW FEATURES ON THE LINE
// -------------------------------------------------------------------------------


app.delete('/messages/:id', async (req, res) => {
    try {
      const result = await AdminMessage.destroy({ where: { id: req.params.id } });
      if (result === 0) {
        return res.status(404).json({ error: 'Message not found.' });
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Error deleting message.' });
    }
  });
  // Route pour marquer un message comme lu
  app.patch('/messages/:id/read', async (req, res) => {
    try {
      const message = await AdminMessage.findByPk(req.params.id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found.' });
      }
      message.isRead = true;
      await message.save();
      res.json(message);
    } catch (err) {
      res.status(500).json({ error: 'Error marking message as read.' });
    }
  });
  



// ------------------------------------------------------------------------------
//THIS ACTUALLY SIGNIFY THE END OF THE TEST SECTION AS MENTIONED ABOVE ,ALRIGHT
// -------------------------------------------------------------------------------


app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { detail } = req.body;
  
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      product.detail = detail; // Update the rich text detail
      await product.save();
  
      res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });





app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
