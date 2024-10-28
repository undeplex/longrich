// import Link from 'next/link';

// export default function ProductList({ products }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
//       {products.map((product) => {
//   console.log("Product name:", product.name);
//   return (
//     <div key={product.id} className="border p-4 rounded-md shadow-md">
// <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>

//           <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//           <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="font-bold mt-2">${product.price}</p>
        
//       </Link>
//     </div>
//   );
// })}
//     </div>
//   );
// }

import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import Loader from './Loader';
export default function ProductList({ products }) {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 w-full mx-auto">
          <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
            <img src={product.image} alt={product.name} className="rounded-xl h-[230px] object-cover" />
            <h2 className="text-xl my-2 font-semibold mt-">{product.name} Longrich</h2>
            <p className="text-gray-600">{product.description}</p>

          </Link>
            <div className="flex my-3 gap-5 items-center justify-around">
        <span className="text-lg">${product.price}</span>
        <span className="underline">{product.category.toUpperCase()}</span>
        <button 
        onClick={() => addToCart(product)}
        className="bg-gray-100 p-3 rounded-full">
        {loading ? <Loader/> : <ShoppingBagIcon className="size-5"/>}

      </button>
      </div>
      {popup && <p className="text-green-500 mt-2">{product.name} added to cart</p>}
          {/* <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add to Cart
          </button> */}
        </div>
      ))}
    </div>
  );
}
