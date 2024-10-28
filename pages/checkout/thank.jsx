import { useAtom } from 'jotai';
import { cartAtom } from '../../atoms/cartAtom';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

export default function ThankYouPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const router = useRouter();
  const { name, email, address } = router.query;

//   useEffect(() => {
//     // Clear cart only when reaching this page
//     setCart([]);
//   }, [setCart]);

  const whatsappCheckout = () => {
    const message = `Order Summary for ${name}:
    - Products: ${cart.map(item => `${item.name} x${item.quantity}`).join(', ')}
    - Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
    - Address: ${address}`;
    
    const whatsappNumber = '0990664406';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Merci d'avoir commandé chez LongrichStore By Caled</h1>
      <p className="mb-2">Resumer de la commande:</p>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex items-center bg-slate-100 rounded-xl p-3 gap-3 my-4">

            <img src={item.image} alt={item.name} className="size-[100px] rounded-xl object-cover" />
            <div>
              <span className="text-xl">

            {item.name} x{item.quantity} - ${item.price * item.quantity}
              </span>

<p className="etxt text-gray-500">{item.description} </p>
            </div>
            
          </li>
        ))}
      </ul>
      <p className="mt-4 text-2xl ">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
<p className="le text-left text-gray-500 text-lg">
  Et vos info de Livraisons sont:
  Nom Complet: MUISHO NAN Pedro
  @Mail: Undeplex@bigsociety.co
  @Physique: 34th Big Street Yung
  Numero: +243912000032

</p>
      <button onClick={whatsappCheckout} className="mt-6 bg-green-500 text-white p-4 rounded">
        Checkout via WhatsApp
      </button>
    </div>
  );
}