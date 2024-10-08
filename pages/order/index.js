import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import axios from 'axios';
import { useRouter } from 'next/router';
import { cartAtomWithStorage } from '@/atoms/cart';
import Layout from '@/components/Layout';

export default function Checkout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [cart, setCart] = useAtom(cartAtomWithStorage);
    const router = useRouter();

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        try {
            const order = {
                name,
                email,
                address,
                items: cart,
            };
    
            // Create a message for WhatsApp
            const orderDetails = cart
                .map(item => `• ${item.name} - Qty: ${item.quantity}`)
                .join("\n");
    
            const message = `*Order Details*\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nItems:\n${orderDetails}`;
            
            // WhatsApp URL format (you can replace the phone number with the real one)
            const whatsappURL = `https://wa.me/+243990664406?text=${encodeURIComponent(message)}`;
    
            // Save the order in localStorage (optional)
            localStorage.setItem('lastOrder', JSON.stringify(order));
            localStorage.removeItem('cart');
            setCart([]);
    
            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');
    
            // Optionally redirect to thank you page
            router.push('/thank-you');
        } catch (error) {
            console.error('Failed to submit order', error);
        }
    };
    
    return (
        <Layout>

        <div className="px-3 ma max-w-4xl mx-auto bg-white m-3">
            <h1 className="play text-2xl">Checkout</h1>
            <div className="bg-gray-500 bg-opacity-5 p-4 rounded-xl text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>Vos informations ne seront pas utiliser en dehors de la livraisons, on tient a rappeller que les livraisons physiques ne sont possible 
            que pour nos clients qui habitent la ville de <span className="underline">LUBUMBASHI</span> , pour ceux qui habitent enhors , ils peuvent
            <span className="underline text-blue-600"> contacter le service client</span> 

            </div>
            <form onSubmit={handleOrderSubmit}>
                <label>
                    Nom complet
                    <input
                        type="text"
                        value={name}
                        className="border p-3 rounded-lg mt-2 "
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Address mail
                    <input
                        type="email"
                        value={email}
                        className="border p-3 rounded-lg mt-2"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Address 
                    <input
                        type="text"
                        value={address}
                        className="border p-3 rounded-lg mt-2"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <button className="bg-black p-4 text-white text-lg" type="submit">Placer la commande</button>
                Les autres informations seront recuperer ulterieurement 

            </form>
            <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                label {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 10px;
                }
                button {
                  
                }
            `}</style>
        </div>
        </Layout>
    );
}