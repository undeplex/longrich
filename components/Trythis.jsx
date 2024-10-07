import { useState } from 'react';
import CartPop from './Cartpop';
import CartIcon from './CartIcon';
import { X } from 'lucide-react';

const Trythis = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" z-50  rounded-lg"
      >
        <CartIcon/>
      </button>
      {/* Cart Overlay */}
      <div
        className={`fixed inset-0 bg-black backdrop-blur-sm  bg-opacity-30 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[470px] h-screen bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="p-4 text-gray-700 flex justify-between">
        <h2 className="text-lg font-bold animate-fade-in"></h2>
          <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-red-500 underline"
      >FERMER LE PANIER <X className="inline"/>
        
      </button>
        </div>
        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto">     
        <>
        <CartPop/>
        </>
        </div>
      </div>
    </>
  );
};

export default Trythis;