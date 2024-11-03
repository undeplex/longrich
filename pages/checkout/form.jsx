// import { useState } from 'react';
// import { useAtom } from 'jotai';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { FaWhatsapp } from 'react-icons/fa';
// import { cartAtom } from '../../atoms/cartAtom';

// export default function CheckoutForm() {
//   const router = useRouter();
//   const [cart] = useAtom(cartAtom);  // Retrieve the cart from the atom
//   const [form, setForm] = useState({ name: '', email: '', address: '', number: '' });
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const validateForm = () => {
//     if (!form.name || !form.email || !form.address) {
//       setError('Please complete all required fields');
//       return false;
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       setError('Please enter a valid email address');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const createOrderSummary = () => {
//     const cartSummary = cart.map((item) =>
//       `- ${item.name}: ${item.quantity} x $${item.price}`
//     ).join('\n');
//     return `
//       Name: ${form.name}
//       Email: ${form.email}
//       Address: ${form.address}
//       Phone Number: ${form.number || 'Not provided'}
      
//       Order Summary:
//       ${cartSummary}
//     `;
//   };

//   const finishCheckout = async (isWhatsapp) => {
//     if (!validateForm()) return;

//     const orderSummary = createOrderSummary();

//     try {
//       await axios.post('/api/send-email', { ...form, cart, orderSummary });

//       if (isWhatsapp) {
//         redirectToWhatsApp(orderSummary);
//       } else {
//         router.push({ pathname: '/checkout/thank', query: { ...form } });
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setError('An error occurred while processing your order. Please try again.');
//     }
//   };

//   const redirectToWhatsApp = (orderSummary) => {
//     const whatsappMessage = encodeURIComponent(`Order Summary:\n\n${orderSummary}`);
//     window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`, '_blank');
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <img src="/img/24.jpg" alt="Checkout Banner" className="rounded-xl w-full h-[124px] object-cover"/>
//       <h1 className="text-2xl font-bold my-3 text-center">Complete Your Information</h1>
      
//       {error && <p className="text-red-500">{error}</p>}

//       <FormInput label="Name" name="name" placeholder="Name" value={form.name} onChange={handleInputChange} />
//       <FormInput label="Email Address" name="email" type="email" placeholder="Email" value={form.email} onChange={handleInputChange} />
//       <FormInput label="Delivery Address" name="address" placeholder="Address" value={form.address} onChange={handleInputChange} />
//       <FormInput label="Phone Number (Optional)" name="number" placeholder="Phone Number (optional)" value={form.number} onChange={handleInputChange} />

//       <TermsCheckbox />

//       <button onClick={() => finishCheckout(false)} className="mt-4 bg-green-500 text-white p-4 rounded w-full">
//         Place Order
//       </button>

//       <p className="text-center my-3">Or use:</p>
//       <div className="flex gap-3 justify-center">
//         <button onClick={() => finishCheckout(true)} className="flex items-center gap-2 bg-green-500 text-white p-3 rounded">
//           <FaWhatsapp /> Checkout with WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// }
// function FormInput({ label, name, type = 'text', placeholder, value, onChange }) {
//   return (
//     <div className="my-3">
//       <label>{label}:</label>
//       <input
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="border w-full p-3 mt-1"
//       />
//     </div>
//   );
// }

// function TermsCheckbox() {
//   return (
//     <div className="my-4">
//       <input type="checkbox" required />
//       <span> By submitting, you accept the terms and conditions of Longrich Store</span>
//     </div>
//   );
// }


import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import Loader from '@/components/Loader';  // Assuming your Loader component is in the same directory
import { useAtom } from 'jotai';
import { cartAtom } from '../../atoms/cartAtom';  // Update with the correct path to your cart atom
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function CheckoutForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', address: '', number: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useAtom(cartAtom);  // Assuming cartAtom is managing your cart data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const finishCheckout = async (isWhatsapp) => {
    if (!form.name || !form.email || !form.address) {
      setError('Please complete all required fields');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');  // Clear any previous errors
    setLoading(true);  // Start loading state

    // Order summary message
    const orderSummary = cart.map((item) =>
      `${item.name}: ${item.quantity} x $${item.price}`
    ).join('\n');

    try {
      // Send order summary email
      await axios.post('/api/send-email', { ...form, cart });

      if (isWhatsapp) {
        // Redirect to WhatsApp with order details
        const whatsappMessage = encodeURIComponent(`Order Summary:\n\n${orderSummary}`);
        window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`, '_blank');
      } else {
        // Navigate to thank you page
        router.push({ pathname: '/checkout/thank', query: { ...form } });
      }

      // Clear the cart after successful order
      setCart([]);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred while processing your order. Please try again.');
    } finally {
      setLoading(false);  // Stop loading state
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <img src="/feat.jpeg" className="rounded-xl w-full h-[124px] object-cover"/>
      <h1 className="text-2xl font-bold my-3 text-center">Completer ce formulaire</h1>
      {error && <p className="text-red-500">{error}</p>}
      
      {loading ? (
        <Loader />  // Display the Loader component while loading
      ) : (
        <>
        <div className="relative my-3">
          <label className="absolute top-0 bg-white left-2 px-2">Nom complet *</label>
          <input name="name" placeholder="" onChange={handleInputChange} className="border w-full p-4 mt-3" />
        </div>
        <div className="relative my-3">
          <label className="absolute top-0 bg-white left-2 px-2">Email *</label>
          <input name="email" type="email" placeholder="" onChange={handleInputChange} className="border w-full p-4 mt-3" />
        </div>

        <div className="relative my-3">
          <label className="absolute top-0 bg-white left-2 px-2">Addresse de Livraison *</label>
          <input name="address" placeholder="" onChange={handleInputChange} className="border w-full p-3 mt-3" />
          <p className="text-gray-500 my-3">Completez ce champ si dessus si vous vous trouvez à Lubumbashi ou Kolwezi </p>
        </div>  
        <div className="relative my-3">
        <label className="absolute top-0 bg-white left-2 px-2">Numero de telephone (optionel)</label>
          <input name="number" placeholder="" onChange={handleInputChange} className="border w-full p-3 mt-3" />

        </div>
        <p className="text-gray-500 my-3">
          Tous les champs suivi de (*) sont obligatoire à completer, car ils sont jugés cruciaux pour effectuer une commande sur LongrichStore  
         </p>

        <button onClick={() => finishCheckout(false)} className="mt-4 bg-black text-white text-lg p-4 rounded w-full">
            Placer la commande
          </button>
          <div className="my-4">
            <p className="text-gray-500 my-3">
              <ExclamationCircleIcon className="size-6 inline"/>
              Si vous n'avez pas d'addresse mail , vous pouvez directement passer votre commande à partir de Whatsapp et on vous contactera pour plus de précision
               </p>
            </div>

         

          
          <div className="flex gap-3 justify-center text-lg w-full bg-green-500">
            <button onClick={() => finishCheckout(true)} className="flex  items-center gap-2 bg-green-500 w-fll text-white p-3 rounded">
              <FaWhatsapp /> Checkout avec WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}