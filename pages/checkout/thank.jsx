import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';

export default function ThankYouPage() {
  const router = useRouter();
  const { name, email, address, number, cart } = router.query; // Destructure client info and cart from query params

  // Parse cart data from JSON string
  const parsedCart = cart ? JSON.parse(cart) : [];
  
  // Generate order summary
  const orderSummary = parsedCart.map((item) => (
    <li key={item.id}>
      {item.name}: {item.quantity} x ${item.price.toFixed(2)}
    </li>
  ));

  const totalAmount = parsedCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Function to handle WhatsApp checkout
  const handleWhatsAppCheckout = () => {
    const orderDetails = parsedCart.map((item) => `${item.name}: ${item.quantity} x $${item.price}`).join('\n');
    const whatsappMessage = encodeURIComponent(`Thank you for your order!\n\nOrder Summary:\n${orderDetails}\n\nTotal: $${totalAmount}\n\nClient Info:\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${number}`);
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-b my-5 text-center underline">Merci mr/ms {name} d'avoir  commander chez LongrichStore</h1>
      <h2 className="text-xl font-se">un email de confirmation contenant Un resume de votre commande vous sera envoyer, sur l'addresse {email} par LongrichStore@gmail.org ,et une fois pret pour la livraison nous le ferons a l'addresse {address}</h2>
      <ul className="list-disc list-inside mb-4">
        {orderSummary}
      </ul>
      
   

      <div className="flex justify-center mt-6">
        <button onClick={handleWhatsAppCheckout} className="flex items-center gap-2 bg-green-500 text-white p-3 rounded">
          <FaWhatsapp /> Checkout with WhatsApp
        </button>
      </div>
      <div className=" mx-auto my-8 underline w-max">
        Powered By
      </div>
        <img src="/doic.svg" className=" mx-auto my-10 w-[210px]"/>
      
    </div>
  );
}