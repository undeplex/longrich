// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import AdminLayout from '@/components/AdminLayout';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [toggleStyle, setToggleStyle]= useState(false)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get('http://localhost:5000/producty');
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <AdminLayout>

//      {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
// <dialog id="my_modal_4" className="modal">
//   <div className="modal-box w-11/12 max-w-5xl">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>


//       <h1 className="text-2xl font-bold"></h1>
//       <p>iption</p>
//       <p className="text-xl font-semibold"></p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" >
//         Add to Cart
//       </button>
//       <button
//         className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-4"
//         onClick={() => setToggleStyle(!toggleStyle)}
//       >
//         Toggle Style
//       </button>

//       <div className={toggleStyle ? "bg-red-300 p-3 transition-all duration-1000" : "bg-green-500 p-3 transition-all duration-1000"}>
//         <h2 className="text-xl mt-8">Reviews</h2>
       
//       </div>

//       </AdminLayout>
//     </div>
//   );
// };

// export default Home;

import AdminLayout from '@/components/AdminLayout'
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PlusIcon,PhotoIcon,ArchiveBoxIcon,UsersIcon,ChatBubbleBottomCenterTextIcon,ShoppingBagIcon,CubeIcon,Cog8ToothIcon, ChevronDownIcon, Bars2Icon} from '@heroicons/react/24/solid';

export default function Admin() {
  const router = useRouter();
  const one= '/logo.svg'
  const links = [
    { href: '/admin/orders',comment:'',  label: 'Commandes',icon:<ShoppingBagIcon className="size-5  text-gray-700"/> },
    { href: '/admin/add_product',comment:'',  label: 'Ajouter un produit',icon:<PlusIcon className="size-5  text-gray-700"/> },
    { href: '/admin/assets',comment:'',  label: 'Actif/images ',icon:<PhotoIcon className="size-5  text-gray-700"/> },
    { href: '/admin/free',comment:'',  label: 'Inventaire',icon:<ArchiveBoxIcon className="size-5  text-gray-700"/> },
    { href: '/admin/review',comment:'',  label: 'Revues',icon:<UsersIcon className="size-5  text-gray-700"/> },
    { href: '/admin/admin-community',comment:' ',  label: 'Messages',icon:<ChatBubbleBottomCenterTextIcon className="size-5  text-gray-700"/> },
  ];
  
  return (
    <AdminLayout>
      
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl min-h-screen">
        <nav className="space-y-2 max-w-3xl mx-auto gap-3 p-4 place-items-center  w-full grid md:grid-cols-3 grid-cols-2 lg:grid-cols-3">
           {links.map((link) => (
             <Link key={link.href} href={link.href}>
              <div className="bg-white hover:ring-4 hover:ring-emerald-300 relative 300 pl-7 pr-1  py-4 h-min max-w-[340px] rounded-xl">

               <span className="flex sm:text-xl text-lg font-bold  play items-center ga justify-betwee gap-2 w-full ">
               <span className="bg-black bg-opacity-5 grid place-content-center  rounded-full size-10"> {link.icon}</span>
                 {link.label}
               {router.pathname === link.href && <div className="size-2 border rounded-full bg-emerald-700"></div>}
               </span>
               <span className="my-3 block">

               {link.comment}
               </span>
               <div className="absolute  r top-1/2 -left-0 -translate-x-1/2 -translate-y-1/2 size-8 bg-gray-100 rounded-full"></div>
               <div className="absolute top-3 right-3  size-4 ring-4 ring-gray-400 ring-opacity-15 bg-gray-00 bg-gray-400 bg-opacity-10 rounded-full"></div>

              </div>

              
             </Link>
           ))}
         </nav>
        </div>
    </AdminLayout>
  )
}
