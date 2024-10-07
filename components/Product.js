import { useAtom } from 'jotai';
import { cartAtomWithStorage } from '../atoms/cart';
import { useState } from 'react';

const Product = ({ product }) => {
    const [cart, setCart] = useAtom(cartAtomWithStorage);
    const [loading, setLoading] = useState(false);
  

  const addToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setCart([...cart, product]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <img className=" w-32 h-32 " src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} width="" />
      <button onClick={addToCart}>
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;