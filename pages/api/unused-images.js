import fs from 'fs';
import path from 'path';
import { Product } from '@/lib/sequilize';

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
