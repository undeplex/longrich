
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartIcon from './CartIcon';
import { Search, X } from 'lucide-react';
import { Bars2Icon, ChevronDownIcon, ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { FaHashtag } from 'react-icons/fa';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartIndicator, setCartIndicator] = useState(false);
  const router = useRouter();


  
 const [toggleStyle, setToggleStyle]= useState(false)

  return (
    <div>
      <button
        onClick={() => {setIsOpen(!isOpen);setToggleStyle(!toggleStyle)}}
        className="  focus:outline-none"
      >
        {isOpen &&
        <X className="size-6"/>
        }
 {!isOpen &&
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>}

      </button>

      <div className={`fixed  top-[63px] left-0 max-w-[450px] p-4 bg-gray-5 bg-white bg-opacity-90 backdrop-blur-2xl text-gray-800  h-screen rounded-bl-3xl z-50 transform transition-transform ${isOpen ? 'translate-x-0 ' : '-translate-x-[1400px]'}`}>
        <div className="">        
       
        
          <nav className=" space-y-3 text-xl  flex px-2 flex-col justify-start float-left  w-full">
                 <Link href="/">
                        <button
                           onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                           className="p flex items-center gap-1">Acceuil
                        </button>
                    </Link>
                    <Link href="/products">
                        <button
                           onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                           className="p flex items-center gap-1">Catalogue
                        </button>
                    </Link>
                    <Link href="/">
                        <button
                           onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                           className="p flex items-center gap-1">Nous contacter
                        </button>
                    </Link>
                    <p className="text-gray-500 text-2xl flex">
                      Shop By Category <ChevronDownIcon className=" size-7"/>
                    </p>
                    <div className="p- space-y-3 flex px-2 flex-col justify-start mb-">
                        <Link href="/category/Soins du corps">
                            <button
                              onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                              className="p flex items-center gap-1"><FaHashtag/> Cosmetique
                            </button>
                        </Link>
                        <Link href="/category/Produit de sante">
                            <button
                              onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                              className="p flex items-center gap-1"><FaHashtag/> Produits de sante
                            </button>
                        </Link>
                        <Link href="/category/Complement Alimentaire">
                            <button
                              onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                              className="p flex items-center gap-1"><FaHashtag/> Complement Alimentaire
                            </button>
                        </Link>
                        <Link href="/category/divers">
                            <button
                              onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                              className="p flex items-center gap-1"><FaHashtag/> Autres
                            </button>
                        </Link>
                       
                    </div>
                   <div className=" pt-20">

                    <Link href="/">
                        <button
                           onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                           className="p flex items-center gap-1">
                           <ExclamationCircleIcon className="size-6"/> Info & Help
                        </button>
                    </Link>
                    <Link href="/">
                        <button
                           onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
                           className="p flex items-center gap-1">
                           <QuestionMarkCircleIcon className="size-6"/> FAQ
                        </button>
                    </Link>
                   </div>
                    
                   

             </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;