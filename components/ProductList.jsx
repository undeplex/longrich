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
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import Loader from './Loader';
import { ShoppingCart,RocketIcon } from 'lucide-react';
import { FireIcons } from '@heroicons/react/24/solid';
import { FaAirFreshener } from 'react-icons/fa';
import { FireIcon } from '@heroicons/react/24/solid';
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
    }, 1000); // Simulate loading delay
  };

  return (
    <div className="grid grid-cols-2  bg- md:grid-cols-3 gap-4  px-3 ">
      {products.map((product) => (
        <div key={product.id} className="p-4 my-3 px-3 red-200 max-w-[340px]  border-b-2 mx-auto ">
          <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
            {product.featured && <>
              <div className="text-white w-max text-sm bg-emerald-500 -rotate-[23deg] g-opacity-15 px-3 py-2">
              Populaire  <FireIcon className="inline size-4"/>
              </div>
            
            </>}
            {!product.featured && <>
              <div className="text-white text-sm w-max bg-orange-500 -rotate-[23deg] g-opacity-15 px-3 py-2">
              Tendence <RocketIcon className="inline size-4"/>
              </div>
            
            </>}
         
          <div className="px-9 bg-gray grid place-content-center h-[122px] mb-4">

            <img src={product.image} alt={product.name} className="rounded-xl h-full w-[160px] object-cover" />
          </div>
            <h2 className=" my-2 font-semibold bg-purpl  h-[65px] w-11/12 mt-">{product.name} </h2>

            <p className="text-gray-600 text-sm  h-[72px] g-red-400 w-full break-all">{product.smallDescription}</p>
            <p className="text-gray-800 underline text-sm">Q.{product.quantite}</p>
          {product.availability ? <span className="text-green-500 text-sm">Disponible en stock</span>  :<span className="text-red-500 text-sm">No stock Disponible</span> }
          </Link>
            <div className="flex my-3 gap-5 items-center justify-between">
        <span className="text-2xl">${product.price}</span>
        <button 
        onClick={() => addToCart(product)}
        className="bg-gray-100 p-3 block relative  rounded-full">
          <span className=" absolute top-0 -right-2 size-5 rounded-full grid bg-white text-gray-600 shadow-2xl place-content-center">+</span>
        {loading ? <Loader/> : <ShoppingCart className="size-5 text-slate-700"/>}
        

      </button>
      </div>
        <span className="underline">{product.category.toUpperCase()}</span>
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
