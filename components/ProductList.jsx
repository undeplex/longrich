import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Loader from './Loader';

export default function ProductList({ products }) {
  const [cart, setCart] = useAtom(cartAtom);

  // State to manage loading and popup visibility for each product
  const [loadingProductId, setLoadingProductId] = useState(null);
  const [popupProductId, setPopupProductId] = useState(null);

  const addToCart = (product) => {
    setLoadingProductId(product.id);

    setTimeout(() => {
      setLoadingProductId(null);
      setPopupProductId(product.id);

      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity if already in cart
        setCart(cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        // Add new item to cart
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      // Popup disappears after 2 seconds
      setTimeout(() => setPopupProductId(null), 2000);
    }, 3000); // Simulate loading delay
  };

  // Loading state for search, filter, or sort
  const [isFiltering, setIsFiltering] = useState(false);

  // Sample function to simulate filtering or sorting
  const handleFilter = () => {
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 1000); // Simulate 1-second loading
  };

  return (
    <div>
      

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 w-full mx-auto">
            <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
              <img src={product.image} alt={product.name} className="rounded-xl h-[230px] object-cover" />
              <h2 className="text-xl my-2 font-semibold">{product.name} Longrich</h2>
              <p className="text-gray-600">{product.description}</p>
            </Link>
            <div className="flex my-3 gap-5 items-center justify-around">
              <span className="text-lg">${product.price}</span>
              <span className="underline">{product.category.toUpperCase()}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-100 p-3 rounded-full"
              >
                {loadingProductId === product.id ? <Loader /> : <ShoppingBagIcon className="size-5" />}
              </button>
            </div>
            {popupProductId === product.id && <p className="text-green-500 mt-2">{product.name} added to cart</p>}
          </div>
        ))}
      </div>
    </div>
  );
}