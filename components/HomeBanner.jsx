import { ShoppingCartIcon,ShoppingBagIcon } from 'lucide-react'
import React from 'react'

export default function HomeBanner() {
  return (
    <div className=" px-2  -100 text-center flex wma  flex-col gap-1 mt-8 s justify-between ">
      <div className="w-full relative h-full bg-red-200">
         <img src="plause5.jpg"/>
         <div className="w-full bg-black bg-opacity-40 absolute inset-0"></div>
         <div className="w-1/2   sm:h-1/2  rounded-3xl bg-opacity-30 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <div className="text-center">
              <div className="play text-white  sm:mt-4 text-xl">
                NEW PRODUCT 
              </div>
              <div className="play font-bol text-white mt-1 sm:mt-4 text-3xl sm:text-4xl">
                MAKE YOU SHINE
              </div>
              <div className="play text-white mt-4 text-xl hidden sm:block">
                Longrich Store By Caleb propose de produit naturel qui mettaient en valeur votre Bien etre ... 
              </div>
              <button className="px-6 py-2 sm:py-3 bg-white text-black rounded-full mt-2 sm:mt-4 flex  w-max mx-auto items-center gap-1">Shop now
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 inline-block text-gray-700">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
              </button>
              <div className="italic hidden sm:block underline underline-offset-1 font-bol text-white mt-1 sm:mt-4  sm:text-">
                BIG SALE FROM November 13th 2024
              </div>
            </div>
         </div>
      </div>
              <div className="text-l text-gray-500">DELIVERING SINCE 2021</div>
        <div className="text-2xl bol play font-bold">Longrich Store By Caleb</div>
        <div className="text-xl ">Decouvre des produits de qualites</div>
        <div className="text- md:w-8/12 mx-auto">
          Votre jouney pour des produists de sante et bien-etre de worl-class quality.
          Devenez aussi partenaire et profitez de notre engagement envers la qualite, la rapidite et la securisation 
          des livraisons
        </div>
        <button  className="  my-3  mx-auto sm:w-max w-ful text-center zi -50  bg-gradient-to-bl text-black bg-emerald-500 bg-opacity-10 px-3 py-4 rounded-xl gap-2">
          <div className="w-max mx-aut text-lg text-gray-700">

                    Visiter notre shop Online
                    <ShoppingCartIcon className="inline"/>
          </div>
        </button>
    </div>
  )
}