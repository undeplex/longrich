import { Bars2Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SquaresPlusIcon,ArrowDownRightIcon ,ArchiveBoxIcon,UsersIcon,ChatBubbleBottomCenterTextIcon,CpuChipIcon,CloudIcon,FolderArrowDownIcon,GlobeAltIcon,LanguageIcon,SparklesIcon,BoltIcon, HomeModernIcon,Cog8ToothIcon, ChevronDownIcon} from '@heroicons/react/24/solid';

const MobileMenuAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);



  const router = useRouter();
  const one= '/logo.svg'
    const links = [
      { href: '/admin', label: 'Home page',icon:<SquaresPlusIcon className="size-5 bg text-gray-700 mr-2"/> },
      { href: '/admin/add_product', label: 'Add Product',icon:<ArrowDownRightIcon className="size-5 bg text-gray-700 mr-2"/> },
      { href: '/admin/free', label: 'Inventaire',icon:<ArchiveBoxIcon className="size-5 bg text-gray-700 mr-2"/> },
    ];
  
  return (
    <div className="block  lg:hidden md:block ">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="  focus:outline-none"
      >
        <Bars2Icon className="md:size-8 size-7"/>
      </button>

      <div className={`fixed inset-0 px-4 pb-8 bg-gray-50 border-b-2 border-l-2 border-gray-300 h-max rounded-bl-3xl  z-50 transform transition-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between ">
          <button
            onClick={() => setIsOpen(false)}
            className=" rounded-xl underline float-left bg-opacity-15  focus:outline-none"
          >
              CLOSE THIS MENU🙄
          </button>
<span class=""> </span>
        <img class=" size-[85px]" src="/freelogo.svg" alt="" srcset="" width="120" />
         
        </div>
  


        <div class="">
         
         <nav className="flex space-y-2 flex-col w- max-w-[310px]">
           {links.map((link) => (
             <Link key={link.href} href={link.href}>
               {/* <p className="flex bg-white hover:bg-emerald-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"> */}

               {link.icon}
               <span className="flex items-center justify-betwee gap-1 w-full ">
                 {link.label}
               </span>
           
             </Link>
           ))}
         </nav>
 
         </div>
         
         <div class=" text-sm pt-2 ">
         
</div>
 
        <p class="font-bold mt-3 flex">
          <BoltIcon class="text- size-4"/>
            Apowered by Odopz LLc
        </p>
      </div>
      
    </div>
  );
};

export default MobileMenuAdmin;