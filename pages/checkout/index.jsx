import Header from '@/components/Header';
import { CheckCheckIcon } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Checkout() {
  const router = useRouter();

  const proceedToForm = () => {
    router.push('/checkout/form');
  };

  return (
      <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Pret pour effectuer votre commande?</h1>
      <p className="text-gray-600">
        Il est necessaire de suivre les etapes si dessous pour mieux commander et etre informer sur les 
        type de commandes que nous proposons avant que vous ne puissiez avancer , alors si vous etes pret cliquer sur le 
        button down below <CheckCheckIcon/>........
      </p>
      <button 
        onClick={proceedToForm}
        className="mt-6 bg-emerald-500 texthite px-4 py-4 bg-opacity-15 text-emerald-500 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
}