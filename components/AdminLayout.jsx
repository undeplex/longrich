// components/AdminLayout.js
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { PhotoIcon,ArchiveBoxIcon,UsersIcon,ChatBubbleBottomCenterTextIcon,ShoppingBagIcon,CubeIcon,Cog8ToothIcon, ChevronDownIcon, Bars2Icon} from '@heroicons/react/24/solid';
import MobileMenuAdmin from './MobileMenuAdmin';
const AdminLayout = ({ children }) => {
  const router = useRouter();
const one= '/logo.svg'
  const links = [
    { href: '/admin/orders', label: 'Commandes',icon:<ShoppingBagIcon className="size-5 mr-2"/> },
    { href: '/admin/assets', label: 'Actif/images ',icon:<PhotoIcon className="size-5 mr-2"/> },
    { href: '/admin/free', label: 'Inventaire',icon:<ArchiveBoxIcon className="size-5 mr-2"/> },
    { href: '/admin/review', label: 'Revues',icon:<UsersIcon className="size-5 mr-2"/> },
    { href: '/admin/admin-community', label: 'Messages',icon:<ChatBubbleBottomCenterTextIcon className="size-5 mr-2"/> },
  ];




  return (
      


    
      <div class="relative  bg-gray-50 w-full  min-h-screen pb-12">
  <header class="fixed z-50 right-0 top-0 left-0 lg:left-60  shadow-sm bg-white py-3 md:px-4 lg:px-4 h-16">
    <div class="  mx-7 ">
      <div class="flex items-center justify-between lg:justify-around  w-full">
        <div>
          <MobileMenuAdmin/>
          <Link href="/admin">
          
          <button type="button" class="hidden lg:flex items-center focus:outline-none  text-gray-600 hover:text-emerald-500 focus:text-emerald-500 font-semibold p-2 border border-transparent hover:border-emerald-300 rounded-xl focus:border-emerald-300 transition">
            <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </span>
            <span class="hidden lg:block md:block">

            <span class="text-sm flex gap-1 items-center">
             
              
            </span>
            </span>
          </button>
          </Link>
        </div>
        <Link href="/admin">
      
            <p className="lg:hidden font-bold text-sm object-cover" >Home</p>
            </Link>
        <Link href="/">
        
          <div class="text-[12px] gap-1 h-[54px] font-bold flex ali items-center  "> 
            <img class="  w-[90px]" src="/freelogo.svg" alt="" srcset="" width="120" />
            Home
          </div>
        </Link>
<div className="hidden lg:block md:block">

        <div className="flex items-center gap-4 ">
         <div className="border p-[5px] rounded-full relative">
          <span class="size-[10px] rounded-full bg-green-600  block absolute top-0 -left-1"></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
         </div>
         <div className=" flex gap-1">
            <img className="rounded-full size-10 border-2 object-cover" src='/play.png'  width="34" height="34"/>

            
            <p class="text-sm font-bold">
              @PeterNzana <br/>
              <span class="text-gray-500 font-normal flex ">Odop's
                BEO 
                <ChevronDownIcon className="size-5"/>
              </span>
            </p>
         </div>
        </div>
</div>
      </div>
    </div>
  </header>

  <aside class="fixed over  inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 lg:block hidden ">
    <div class="flex flex-col justify-between h-full">
      <div class="flex-grow">
        <div class="px-4 py-6 text-center border-b">
          <img src="/freelogo.svg" width="100" className="mx-auto"/>
          <div className=" text-sm text-slate-900 font-bold">Admin Panel</div>
        </div>
        <div class="p-4">
         
        <nav className="flex space-y-2 flex-col">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {/* <p className="flex bg-white hover:bg-emerald-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"> */}
<p className={router.pathname === link.href ? ' bg-emerald-200 text-emerald-900 roundex flex rounded-xl font-bold text-sm  py-3 px-4' :
   'flex bg-white hover:bg-emerald-50 rounded-xl font-bold text-sm text-gray-700 py-3 px-4'}>
              {link.icon}
              <span >
                {link.label}
              </span>
              </p>
            </Link>
          ))}
          <div class=" max-w-[120px] w-8/12 mx-auto shadow-xl   rounded-2xl overflow-hidden ">
      <img src='/25.jpg'  className="w-[120px] h-full object-cover"/>

          </div>
      <div>
     



        <div className="">
        <div className="flex bg-gray-400 bg-opacity-5 hover:bg-gray-600 hover:cursor-pointer hover:bg-opacity-5  items-center  rounded-xl p-2 my-3 font-bold gap-3 text-sm">
              <div className="bg-gray-500 bg-opacity-15 rounded-xl  w-max p-2">
                <Cog8ToothIcon className="size-5 text-gray-700"/>
              </div>
                Settings & Preferencess
        </div>
          <div className="flex ce ite items-center border rounded-full p-3 text-sm">
            <p className="font-bold">Light mode is activated</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  colr text-emerald-500">
  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
</svg>
   </div>
        </div>
       
      </div>
        </nav>

        </div>
      </div>
      
    </div>
  </aside>

  <main className="overflow-scrol  lg:pl-60 pt-20 min-h-screen ">{children}</main>

 
</div>
  

  );
};

export default AdminLayout;
