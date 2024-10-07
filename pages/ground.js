import Layout from '@/components/Layout'
import React from 'react'
import { useState } from 'react';

export default function Ground() {
    const [focusedField, setFocusedField] = useState(null);

    const handleFocus = (fieldName) => {
      setFocusedField(fieldName);
    };
  
    const handleBlur = () => {
      setFocusedField(null);
    };
  
    const renderFieldLabel = (fieldName) => {
      return (
        focusedField === fieldName && (
          <div className="absolute px-3 bg-white -top-2 right-0 text-xs text-gray-500">
            {fieldName}
          </div>
        )
      );
    };
  
  return (
    <Layout>
       <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form className="grid md:grid-cols-2  lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="Product Name"
              placeholder="Product Name"
              onFocus={() => handleFocus('Product Name')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Product Name')}
          </div>
          <div className="relative">
            <input
              type="text"
              name="SKU"
              placeholder="SKU"
              onFocus={() => handleFocus('SKU')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('SKU')}
          </div>
          <div className="relative">
            <input
              type="number"
              name="Price"
              placeholder="Price"
              onFocus={() => handleFocus('Price')}
              onBlur={handleBlur}
              className="w-full p-2 border md:max-w-full max-w-[300px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Price')}
          </div>
          <div className="relative">
            <input
              type="number"
              name="Quantity"
              placeholder="Quantity"
              onFocus={() => handleFocus('Quantity')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Quantity')}
          </div>
          <div className="relative">
            <input
              type="text"
              name="Category"
              placeholder="Category"
              onFocus={() => handleFocus('Category')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Category')}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="relative">
            <textarea
              name="Description"
              placeholder="Description"
              onFocus={() => handleFocus('Description')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
            {renderFieldLabel('Description')}
          </div>
          <div className="relative">
            <textarea
              name="Additional Info"
              placeholder="Additional Info"
              onFocus={() => handleFocus('Additional Info')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
            {renderFieldLabel('Additional Info')}
          </div>
          <div className="relative">
            <input
              type="file"
              name="Image"
              onFocus={() => handleFocus('Image')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Image')}
          </div>
          <div className="relative">
            <input
              type="text"
              name="Tags"
              placeholder="Tags"
              onFocus={() => handleFocus('Tags')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Tags')}
          </div>
          <div className="relative">
            <input
              type="text"
              name="Brand"
              placeholder="Brand"
              onFocus={() => handleFocus('Brand')}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderFieldLabel('Brand')}
          </div>
        </div>
      </form>
    </div>
    </Layout>
  )
}
