import { useState, useEffect } from 'react';
  import { useRouter } from 'next/router';
  import Layout from '@/components/Layout';
  import { cartAtomWithStorage } from '@/atoms/cart';
  import { useAtom } from 'jotai';
  import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/solid';
  import { ShoppingCartIcon } from 'lucide-react';
  import Link from 'next/link';
import CartIcon from './CartIcon';

const CartPop = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [text, setText] = useState('');

      const [cart, setCart] = useAtom(cartAtomWithStorage);
      const router = useRouter();
  
      useEffect(() => {
          const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
          setCart(cartItems);
      }, []);
     
      const handleProceedToPayment = () => {
          router.push('/order');
      };
  
      const handleRemoveFromCart = (index) => {
          const newCart = cart.filter((_, i) => i !== index);
          setCart(newCart);
      };
  
      const updateQuantity = (index, quantity) => {
          const newCart = [...cart];
          newCart[index].quantity = Math.max(1, quantity); // Ensure quantity is at least 1
          setCart(newCart);
      };
  
      const getTotal = () => {
          return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
      };
  return (
    <div >
     

      
                  
                 
<div className="relative pb-[180px] scroll-bar-hidden overflow-y-scroll h-screen ">
    <h1 className="play text-3xl  font-bold text-emerald-900 my-3">Votre panier </h1>
 
    {cart.length > 0 ? (
        <div>
            {cart.map((item, index) => (
                <div key={index} className="py-1 w-full">
                    <div className="flex gap-2 border-b py-2 border-b-gray-300">
                        <div className="w-3/12">
                            <img src={`/uploads/${item.image}`} alt={item.name} width="100" />
                        </div>
                        <div className="w-8/12">
                            <h2 className="text-gray-700 text-lg flex justify-between gap-4 w-full">
                                {item.name}
                                <button onClick={() => handleRemoveFromCart(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                                </button>
                            </h2>
                            <p className="my-2 text-sm text-gray-500">{item.category}</p>
                           
                            <div className="flex justify-between items-center ">
                                <div className="font-bol text-lg">
                                    USD {item.priceDiscount}
                                </div>
                                <div className="flex border t rounded-xl px-4 space-x-2 items-center gap-2 mx-2 ">
                                    <button className="text-xl" onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                                    <span  className="text-lg">{item.quantity}</span>
                                    <button className="text-xl" onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
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