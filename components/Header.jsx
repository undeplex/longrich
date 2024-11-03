import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import CartDrawer from './CartDrawer';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Search, ShoppingCart } from 'lucide-react';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const [cart] = useAtom(cartAtom);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
  <div className="w-full text-slate-800 bg-slate-50">

    <header className="flex  max-w-5xl mx-auto items-center justify-between p-4 bggray-800 ">
            <MobileMenu/>

        <Link href="/">
        <h1 className="flex items-center text-sm xt-lg gap-2">
            By
            <img src="/doic.svg" className="inver w-[80px]"/>Dev
        </h1>
        </Link>
        <div className="flex gap-2 items-center">   
      <div onClick={toggleCart} className="relative cursor-pointer flex items-center">
        <ShoppingCart className="size-6 text-slate-800 inline"/>
      {cart.length > 0 && (
        <span className="text-white ml-1 bg-emerald-500  rounded-full size-4 font-bold grid  place-content-center text-[12px]">{cart.length}</span>
    )}
      </div>
      <Search className="text-gray-700"/>
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
        </div>
    </header>
  </div>
  );
}
