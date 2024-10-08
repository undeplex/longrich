import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cart';
import {ShoppingCart } from 'lucide-react';
const CartIcon = ({element}) => {

  const [cart] = useAtom(cartAtom);

  return (
    <div className="cart-icon ">
    
       <span className="flex items-center">
          {element}
       <ShoppingCart className="size-5 text-gray-600"/>
        <span className="text-white ml-1 bg-emerald-500  rounded-full size-4 font-bold grid  place-content-center text-[12px]">{cart.length}</span>
       </span>
       
      
    </div>
  );
};

export default CartIcon;