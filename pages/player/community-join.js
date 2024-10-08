import { useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';

export default function CommunityJoin() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('https://express-xzfm.onrender.com/community/join', formData);
            alert('Joined the community!');
            setFormData({ name: '', email: '' }); // Reset form
        } catch (error) {
            console.error('Failed to join community', error);
            alert('Failed to join community');
        }
    };

    return (
        <Layout>
              <div className="breadcrumb-mockup text-[16px] ">
                <div className="flex items-center ">
                    <a href="/">
                    <Home className="size-4 text-gray-700"/>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/freestyle1">join the community</a>
                
                </div>

                 </div>
             <div className="max-w-2xl rounded-xl mx-auto bg-white p-6  shadow-md">
            <h1 className="text-2xl font-bold mb-4">Join the Community</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow-sm hover:bg-indigo-700">Join Community</button>
            </form>
        </div>
        </Layout>
       
    );
}