import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import Link from 'next/link';
import { Trash2Icon } from 'lucide-react';


export default function CartDrawer({ isOpen, onClose }) {
  const [cart, setCart] = useAtom(cartAtom);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
};
  return (
    <div className={`fixed z-50 mt-[1px] inset-0 bg-slate-500 bg-opacity-10 ${isOpen ? 'translate-x-0 transition-all duration-200' : 'transition-all duration-200 translate-x-[100%]'}`}>
      <div className="fixed overflow-y-scroll right-0 top-[61px] bottom-0 lg:w-1/3  w-full bg-white text-gray-900 p-4 transition-transform transform duration-300">
      <div className="over ">
        <button onClick={onClose} className="text-left text-xl  underline text-gray-700">FERMER LE PANIER</button>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="pb pb-[163px] ">
            <button onClick={clearCart} className="mt-4 bg-red-500 text-red-500 bg-opacity-15 text-xl px-4 py-2 rounded">Vider le panier</button>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center my-2">
                <div>

                <img src={item.image} alt={item.name} className="size-[93px] rounded-xl object-cover" />
                </div>
<div className="pt-5">                 <p className="text-lg">{item.name}</p>
 <p>{item.category}</p>
<p>${item.price}</p>
</div>
              
                <div className="flex items-center">
                  <button className="grid place-content-center p-4 bg-gray-600 text-xl bg-opacity-15 rounded-full size-7 " onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="mx-2 text-xl">{item.quantity}</span>
                  <button className="grid place-content-center p-4 bg-gray-600 text-xl bg-opacity-15 rounded-full size-7 " onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500"><Trash2Icon/></button>
                </div>
              </div>
            ))}
            <Link href="/checkout">
              <button  className=" text-xl underline text-gray-700">
                          CONTINUER LE SHOPING 
              </button>
        </Link>

          </div>
        )}
      </div>
      </div>
      <div className="fixed overflow-y-scroll right-0 bottom-0 lg:w-1/3  w-full bg-gray-800 px-2 py-3  transition-transform transform duration-300">
    <div className="flex justify-between  items-center my-3 ">
                <h2 className="text-lg font text-gray-200">SubTotal(4items) </h2>
                <h2 className="text-lg font ">USD {getTotal()} </h2>
        </div>
        <Link href="/checkout">
              <button onClick={onClose}  className=" bg-black max-w-[600px] w-full block text-white px-3 py-4 rounded-xl  gap-2">
                          Procéder à la commande             
              </button>
        </Link>

        <div className="flex items-center justify-between text- mt-2 ">
            <div>
                
            </div>
            <div>
                Securite Guarantie de vos donnees
            </div>
            <div className="bg-black p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            </div>
        </div>
    </div>
    </div>
  );
}
