import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import Link from 'next/link';
import { Trash2Icon, X } from 'lucide-react';
import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FaCheckDouble } from 'react-icons/fa';
import Loader from './Loader';

export default function CartDrawer({ isOpen, onClose }) {
  const [cart, setCart] = useAtom(cartAtom);
  const [loadingItems, setLoadingItems] = useState({});

  const removeItem = (id) => {
    setLoadingItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingItems((prev) => ({ ...prev, [id]: false }));
      setCart(cart.filter(item => item.id !== id));
    }, 1500);
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
    <div className={`fixed bg bg-white border-l-2 overflow-y-scroll right-0 top-[67px] pt-3 hide-scrollbar bottom-0 md:w-1/3 b-white l text-gray-900 w-full ${isOpen ? 'translate-x-0 transition-all duration-200' : 'transition-all duration-200 translate-x-[100%]'}`}>

      <div className="over ">
        {cart.length === 0 ? (
          <p>Il n'y pas de produits dans ton panier</p>
        ) : (
          <div className="pb px-2 ">
            <div className="px-3">
              <h1 className="text-2xl font-bold">TON PANIER</h1>
              <p>TOTAL:(1 article) </p>
              <p className="flex gap-1 items-center my-4 text-gray-500">
                <ExclamationCircleIcon className="size-5 w-2/12"/> 
                Il est préférable de prendre votre temps pour vérifier correctement les articles ajoutés dans le panier avant de procéder à la commande
              </p>
            </div>
            {cart.map(item => (
              <div key={item.id} className="flex p-3 border-b justify-between items-center pr-3 gap-2 my-2">
                <div className="w-[190px]">
                  <img src={item.image} alt={item.name} className=" w-10/12 mx-auto rounded-xl object-cover" />
                </div>
                <div className="pt-5 w-">   
                  <p className="text-lg flex items-center max-w-[230px]">{item.name}           
                    <button onClick={() => removeItem(item.id)} className="ml-4 text-red-00 w-12">
                      {loadingItems[item.id] ? <Loader /> : <X />}
                    </button>
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">{item.quantite}</p>
                    <p className="text-lg">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    Quantité:
                    <div className="flex mt-2 items-center">
                      <button className="grid place-content-center p-3 border border-black text-xl bg-opacity-10 size-7" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="mx-2 text-lg">{item.quantity}</span>
                      <button className="grid place-content-center p-3 border border-black text-xl bg-opacity-10 size-7" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <h1 className="font-bold text-xl my-4">RESUME DE LA COMMANDE:</h1>
              <div className="flex justify-between">
                <p>1 article</p>
                <p>$60.00</p>
              </div>
              <div className="flex justify-between">
                <p>Livraison</p>
                <p>$1.50</p>
              </div>
              <div className="flex justify-between font-extrabold my-4">
                <p>Total</p>
                <p>${getTotal()}</p>
              </div>
            </div>
            <div className="right-0 top-0 w-full bg-gray-100 px-2 py-3 transition-transform transform duration-300">
              <div className="flex justify-between items-center my-">
              </div>
              <Link href="/checkout">
                <button onClick={onClose} className="flex justify-center bg-black max-w-[600px] w-full items-center text-white px-3 py-4 rounded-xl gap-2">
                  Procéder à la commande <FaCheckDouble />     
                </button>
              </Link>
              <Link href="/products">
                <button className="mx-auto w-max block underline text-gray-700">OU CONTINUER LE SHOPPING</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}