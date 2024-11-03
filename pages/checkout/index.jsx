import Header from '@/components/Header';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { CheckCheckIcon, X } from 'lucide-react';
import { useRouter } from 'next/router';
import { FaFacebookMessenger, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Checkout() {
  const router = useRouter();

  const proceedToForm = () => {
    router.push('/checkout/form');
  };

  return (
      <div className="p-6 max-w-lg mx-auto ">
      <h1 className="text-3xl font-bold mb-4">Pret à effectuer votre commande?</h1>
      <p className="text-gray-600">
        Seul les commandes effectuer dans la region environnant Lubumbashi et Kolwezi ont la possibilité d'une livraison , si vous habitez ailleurs que dans les régions citées précedement on va vous orienter apres votre commande vers un distributeur de votre région là où vous
        allez payez et retirer vos articles avec notre code :<span className="text-emerald-500 italic"> 23CLB0012 </span> ( Les avantages restent les memes ,car Longrich utilise les memes principes à l'international)
      
      </p>
      <p className="rounded-xl p-3 my-6 bg-red-500 bg-opacity-20 text-red-500">
        <ExclamationCircleIcon className="size-5 inline "/>
        
      </p>
      <button 
        onClick={proceedToForm}
        className="mt-6 flex gap-5 w-full justify-center bg-black px-4 py-4 text-white rounded">
        Continuer la commande
          <CheckCheckIcon/>
      </button>
      <div>
        <p className="text-2xl my-3 font-bold text-">Vous n'etes pas à Lubumbashi ou Kolwezi ?</p>
        <p className="text-">Continuer votre commandes et on vous donnera plus de detail sur comment vous allez retrouver votre articles </p>
      </div>
                      <div className="text- text-gray-600 mt-5">CONTACTER NOUS DIRECTEMENT </div>
      <div className="text- text-gray-900 mt-5">+243 9905532897</div>
                <div className="text- text-gray-900">Caleb@longrichstore.com</div>
                <div className="text- text-gray-900">Longrichstore@info.mail </div>
    <div className="flex items-center  mt-6 gap-5 text-blue-700">
      <FaFacebookMessenger className="text-3xl"/>
      <FaTelegram className="text-3xl text-blue-500"/>
      <FaWhatsapp className="text-3xl text-green-600"/>
    </div>
    </div>
  );
}