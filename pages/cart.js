// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAtom } from 'jotai';
// import { cartAtomWithStorage } from '@/atoms/cart';
// import Layout from '@/components/Layout';

// export default function Cart() {
//     const [cart, setCart] = useAtom(cartAtomWithStorage);
//     const router = useRouter();

//     const handleRemoveFromCart = (index) => {
//         const newCart = cart.filter((_, i) => i !== index);
//         setCart(newCart);
//     };

//     const handleChangeQuantity = (index, quantity) => {
//         if (quantity < 1) return;
//         const newCart = [...cart];
//         newCart[index].quantity = quantity;
//         setCart(newCart);
//     };

//     const getTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

//     return (
//         <Layout>

//         <div className="cart-container">
//             <h1>Shopping Cart</h1>
//             {cart.length > 0 ? (
//                 <div>
//                     {cart.map((item, index) => (
//                         <div key={index} className="cart-item">
//                             <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} width="100" />
//                             <div>
//                                 <h2>{item.name}</h2>
//                                 <p>${item.price}</p>
//                                 <input
//                                     type="number"
//                                     value={item.quantity}
//                                     onChange={(e) => handleChangeQuantity(index, parseInt(e.target.value))}
//                                     min="1"
//                                 />
//                                 <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h2>Total: ${getTotal()}</h2>
//                     <button onClick={() => router.push('/order')}>Proceed to Checkout</button>
//                 </div>
//             ) : (
//                 <p>Your cart is empty.</p>
//             )}
//         </div>
//         </Layout>
//     );
// }



import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { cartAtomWithStorage } from '@/atoms/cart';
import { useAtom } from 'jotai';
import { TrashIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
export default function Cart() {
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
        <Layout>

        <div className="relative min-h-screen mx-auto lg:max-w-3xl  md:max-w-4xl px-4">
            <h1 className="play text-3xl  font-bold text-emerald-600">Votre panier </h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="py-1 w-full">
                            <div className="flex gap-2 border-b py-2 border-b-gray-300">
                                <div className="w-3/12">
                                    <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} width="100" />
                                </div>
                                <div className="w-8/12">
                                    <h2 className="text-emerald-700 flex justify-between gap-4 w-full">
                                        {item.name}
                                        <button onClick={() => handleRemoveFromCart(index)}>
                                            <TrashIcon className="text-gray-500 size-5"/>
                                        </button>
                                    </h2>
                                    <p className="my-2 text-sm text-gray-500">Prix : USD ${item.price}</p>
                                   
                                    <div className="flex items-center text-sm text-emerald-800">
                                        <div className="flex space-x-2 items-center gap-2 mx-2 ">
                                            <button className="text-4xl" onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                                            <span  className="text-xl">{item.quantity}</span>
                                            <button className="text-4xl" onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between px-5 items-center my-3">
                        <h2 className="text-sm font-bold">Total: </h2>
                        <h2 className="text-lg font-bold ">USD ${getTotal()} </h2>
                    </div>
                    <Link href="/">
                            <p className="underline">CONTINUER LE SHOPPING</p>
                         </Link>
                    <div className="text-emerald-700">
                        LongrichStore offres bien plus d'avantage quand il s'agit d'effectuer une commande a partir de son site web officiel, notamment :
                        <strong>La flexibilite de faire une commande sans utiliser une carte bancaire et page lors de la livraison, une livraison gratuite pour ceux qui habitent </strong>
                         dans la ville de <i>Lubumbashi </i>,et Bien plus encore.
                         <Link href="/">
                            <p className="underline">VOIR TOUS LES PERKS</p>
                         </Link>
                    </div>
                        <button onClick={handleProceedToPayment} className="-translate-x-1/2  flex  left-1/2 items-center fixed bottom-3 mx-auto w-max zi z-50  bg-gradient-to-bl to-emerald-500 from-indigo-400 text-white px-3 py-4 rounded-xl gap-2">
                            Procéder à la commande
                            <ShoppingCartIcon/>
                        </button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
        </Layout>
    );
}