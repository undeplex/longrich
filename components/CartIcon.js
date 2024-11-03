import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cart';
import {ShoppingCart } from 'lucide-react';
const CartIcon = ({element}) => {

  const [cart] = useAtom(cartAtom);

  return (
    <div className="cart-icon ">
    
       <span className="flex items-center">
          {element}
       <ShoppingCart className="size-5 text-white"/>
        <span className="text-white ml-1 bg-emerald-500  rounded-full size-4 font-bold grid  place-content-center text-[12px]">{cart.length}play</span>
       </span>
       
      
    </div>
  );
};

export default CartIcon;