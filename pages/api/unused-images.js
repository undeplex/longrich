import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

import { Product } from '@/lib/sequilize';
=======
import { Product } from '@/lib/sequelize';
>>>>>>> ed1da6980910d6bdcbb01d42cdec75cb4f7fb347

export default async (req, res) => {
    try {
        const allFiles = fs.readdirSync(path.join('./public/uploads'));
        const products = await Product.findAll();
        const usedImages = products.map(product => product.image);
        const unusedImages = allFiles.filter(file => !usedImages.includes(file));
        res.json(unusedImages);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch unused images' });
    }
};
