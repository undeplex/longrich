import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

export default function Add_product() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: '', name: '', price: '', priceDiscount: '', detail: '', description: '', keywordSearch: '', category: '', image: null, existingImage: '' });
    const [imagePreview, setImagePreview] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('price', form.price);
        formData.append('priceDiscount', form.priceDiscount);
        formData.append('detail', form.detail);
        formData.append('description', form.description);
        formData.append('keywordSearch', form.keywordSearch);
        formData.append('category', form.category);
        formData.append('subCategory', form.subCategory);
        formData.append('isPopular', form.isPopular);
        formData.append('image', form.image || form.existingImage);

        try {
            if (form.id) {
                await axios.put(`https://express-xzfm.onrender.com/products/${form.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                await axios.post('https://express-xzfm.onrender.com/products', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
            setForm({ id: '', name: '', price: '', priceDiscount: '', detail: '', description: '', keywordSearch: '',isPopular:'', category: '',subCategory: '', image: null, existingImage: '' });
            setImagePreview(null);
            fetchProducts();
        } catch (err) {
            console.error('Failed to submit form', err);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
        setImagePreview(URL.createObjectURL(file));
    };
    const renderFieldLabel = (fieldName) => {
        return (
        
            <div className="text-gray-900   font-bold">
            {fieldName}
          </div>
         
        );
      };
    
    
  return (
    
        <AdminLayout>
            <div className="bg-white sm:text-sm   relative rounded-xl p-4 mx-auto lg:w-11/12">
            <Link href="/">
                <div className="underline my-3 w-max bg-opacity-20">
               GO BACK HOME
                </div>
            </Link> 
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2  lg:grid-cols-2 grid-cols-1 gap-2">

        <div className="relative">
            {renderFieldLabel('Product Name *')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="name" placeholder="" value={form.name} onChange={handleInputChange} required />
        </div>
      
        <div className="relative">
            {renderFieldLabel('price')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="number" name="price" placeholder="" value={form.price} onChange={handleInputChange} required />
        </div>
       
        <div className="relative">
            {renderFieldLabel('price discount')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="number" name="priceDiscount" placeholder="" value={form.priceDiscount} onChange={handleInputChange} />
        </div>
     
        <div className="relative">
            {renderFieldLabel('keyword search')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="keywordSearch" placeholder="" value={form.keywordSearch} onChange={handleInputChange} />
        </div>
       
        <div className="relative">
            {renderFieldLabel('category')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="category" placeholder="" value={form.category} onChange={handleInputChange} />
        </div>
       
        <div className="relative">
            {renderFieldLabel('subCategory')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="subCategory" placeholder="" value={form.subCategory} onChange={handleInputChange} />
        </div>
       
       
    
     
        <div className="relative">
                {renderFieldLabel('details')}
                <textarea  className="w-full  p-2 border min-h-14 border-gray-300  focus:outline-none focus:border-blue-600 "  name="detail" placeholder="" value={form.detail} onChange={handleInputChange} required></textarea>

        </div>
        <div className="relative">
            {renderFieldLabel('isPopularTag')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="isPopular" placeholder="" value={form.isPopular} onChange={handleInputChange} />
        </div>
        <div className="relative">
                {renderFieldLabel('description')}
                <textarea  className="w-full  p-2 border border-gray-300  focus:outline-none focus:border-blue-600   bg-opacity-5 " name="description" placeholder="" value={form.description} onChange={handleInputChange}></textarea>
        </div>
      
        <div>

            <input className="  text-sm bg-red- p-3"  type="file" name="image" onChange={handleFileChange} />
            <button className="bg-emerald-500 block rounded-xl mx-auto   bg-gradient-to-bl text-[15px] from-emerald-500 to-blue-600 my-6 text-white  px-4 py-3 h-12  max-w-[290px] " type="submit">{form.id ? 'Mettre a jour' : 'Ajouter'} ce produit</button>
        </div>

        <div className="relative  text-sm underline overflow-clip">
            <p>Image Preview</p>
            {imagePreview && <img src={imagePreview} alt="Preview" width="100"  class="mx-auto "/>}

        </div>
     


      
    </form>
            </div>


</AdminLayout>
   


  )
}
