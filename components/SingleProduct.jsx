// components/SingleProduct.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import Loader from './Loader';
const SingleProduct = ({ product }) => {
  const [cart, setCart] = useAtom(cartAtom);

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const addToCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPopup(true);

      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        // Update quantity if already in cart
        setCart(cart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        // Add new item to cart
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      setTimeout(() => setPopup(false), 2000); // Popup disappears after 2 seconds
    }, 3000); // Simulate loading delay
  };
  return (
    <div className="shrink-0 min-h-[400px] lg:w-[229px] w-[250px] bg-white p-3 h-max hide-scrollbar rounded-xl overflow-hidden">
<Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[170px] bg-red-100 rounded-xl object-cover"
      />
      <h1 className="text-xl mt-5 font-bold">{product.name.toUpperCase()}</h1>
      <h1 className="text-lg mt-1 font-bold">{product.category}</h1>
</Link>

      
      <div className="flex my-3 gap-5 items-center justify-around">
        <span>${product.price}</span>
        <span className="underline">Best for all</span>
        <button 
        onClick={() => addToCart(product)}
        className="bg-gray-100 p-3 rounded-full">
        {loading ? <Loader/> : <ShoppingBagIcon className="size-5"/>}

      </button>
      </div>
      {popup && <p className="text-green-500 mt-2">{product.name} added to cart</p>}

      <p className="text-gray-600">{product.description}</p>
      <p className="flex mt-2">
        <FaStar className="text-black" /> <span>5 stars, 100% Recommend</span>
      </p>
    </div>
  );
};

export default SingleProduct;