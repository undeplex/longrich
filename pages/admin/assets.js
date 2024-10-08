import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';

export default function Assets() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://express-xzfm.onrender.com/unused-images');
            setImages(response.data);
        } catch (err) {
            console.error('Failed to fetch unused images', err);
        }
    };

    const handleDelete = async (image) => {
        try {
            await axios.delete(`https://express-xzfm.onrender.com/unused-images/${image}`);
            fetchImages();
        } catch (err) {
            console.error('Failed to delete image', err);
        }
    };

    return (
        <div className="assets">
            <AdminLayout>

            <h1>Manage Assets</h1>
            <div>
            </div>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <img src={`https://express-xzfm.onrender.com/uploads/${image}`} alt={image} width="100" />
                        <button onClick={() => handleDelete(image)}>Delete</button>
                    </li>
                ))}
            </ul>
            </AdminLayout>
        </div>
    );
}