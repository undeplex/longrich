import { useState, useEffect } from 'react';

  import { useAtom } from 'jotai';

  import Link from 'next/link';
  import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import Link from 'next/link';

const CartPop = () => {
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
  
      useEffect(() => {
          const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
          setCart(cartItems);
      }, []);
     
      const handleProceedToPayment = () => {
          router.push('/order');
      };
  
    
      const getTotal = () => {
          return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
      };
  return (
    <div >
     

      
                  
                 
<div className="relative pb-[180px] scroll-bar-hidden overflow-y-scroll h-screen ">
    <h1 className="play text-3xl  font-bold text-emerald-900 my-3">Votre panier </h1>
 
    {cart.length > 0 ? (
        <div><div>
        <button onClick={clearCart} className="mt-4 bg-red-500 text-white p-2 rounded">Clear Cart</button>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center my-2">
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <div className="flex items-center">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
          </div>
        ))}
        <Link href="/checkout">
        <button className="bg-green-500 text-white w-full p-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </Link>
      </div>
           
           
            <div className="mb-[100px]">
            
            <Link href="/">
                    <p className="text-sm underline">CONTINUER LE SHOPPING</p>
            </Link>
            <Link href="/">
                    <p className="text-sm underline">APPRENDRE PLUS SUR LES LIVRAISON</p>
            </Link>
            </div>
          
                
        </div>
    ) : (
        <p>Your cart is empty.</p>
    )}
    <div className="bottom-0 left-0 py-3 px-4 border-t-2   fixed  mx-auto w-full zi z-50 bg-white">
    <div className="flex justify-between  items-center my-3 ">
                <h2 className="text-lg font-bold">SubTotal(4items) </h2>
                <h2 className="text-lg font-bold ">USD {getTotal()} </h2>
        </div>
       <button onClick={handleProceedToPayment} className=" bg-black max-w-[600px] w-full block text-white px-3 py-4 rounded-xl  gap-2">
                    Procéder à la commande             
        </button>
        <div className="flex items-center justify-between text-sm tex font-bold my-3 ">
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

                    
           
          
          
          
      
    </div>
  );
};

export default CartPop;