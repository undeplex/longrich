import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaEbay, FaGoogle, FaWhatsapp } from 'react-icons/fa';

export default function CheckoutForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', address: '', number: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const finishCheckout = () => {
    if (!form.email || !form.name || !form.address) {
      setError('Please complete all required fields');
      return;
    }
    
    router.push({
      pathname: '/checkout/thank',
      query: { ...form }
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <img src="/img/24.jpg" className="rounded-xl w-full h-[124px] object-cover "/>
      <h1 className="text-2xl font-bold my-3 text-center">Completer vos informations</h1>
      {error && <p className="text-red-500">{error}</p>}
      <label>Nom Complet:</label>
      <input name="name" placeholder="Name" onChange={handleInputChange} className="border w-full p-3  mt-3" />
      <label>Address mail*:</label>

      <input name="email" placeholder="Email" type="email" onChange={handleInputChange} className="border w-full p-3  mt-3" />
      <label>Addresse pour la livraison:</label>

      <input name="address" placeholder="Address" onChange={handleInputChange} className="border w-full p-3  mt-3" />
      <label>Numero de telephone(optionel):</label>

      <input name="number" placeholder="Phone Number (optional)" onChange={handleInputChange} className="border w-full p-3  mt-3" />
      <div className="my-4">

      <input type="checkbox"/><span>En deposant vous accepter les termes et conditions de commande donnees par Longrich Store</span>
      </div>
      <button onClick={finishCheckout} className="mt-4 bg-green-500 text-white p-4 rounded w-full">Effectuer la commande</button>
      <div>
        <p className="text-center my-3">Ou bien utiliser:</p>
        <div className="flex gap-3 justify-center">
          
        <FaGoogle className="size-6"/>
        <FaWhatsapp className="size-6"/>
        <FaEbay className="size-6"/>
        </div>
      </div>
    </div>
  );
}