import { PresentationChartBarIcon, SwatchIcon } from '@heroicons/react/24/outline'
import { Truck } from 'lucide-react'
import React from 'react'


export default function WhyChoseUs() {
  return (
    <div  className="my-14 px-5">
        <div className="text-4xl font-bold play mb-6 text-center  font-">
            Pourquoi chosir Longrichstore By Caleb
        </div>
      <div className="flex gap-3 items-center justify-center flex-wrap">
        <div className="bg-white lg:translate-y-7 p-[17px] max-w-[370px] flex flex-col  justify-between bg-opacity-80 rounded-xl">
           <div className="flex flex-col gap- items-center">
            <p className="font-b play text-3xl  text-emerald-500 bg-gr">
                <span className="bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-center mx-auto text-emerald-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
                Information Fiable
            </p>
            <p className="mt-2 text-center">
                Toutes les informations fournies sur ce site ou par contact donnees sur ce site sont fiable car ,
                LongrichStore est un partenaire enregistrer de Longrich
            </p>
           </div>
           <div className="flex flex-col gap- items-center">
            <p className="font-b play text-3xl text-center bg flex-col flex items-center   text-emerald-500 bg-gr">
                <span className="bg-gray ">
                   <PresentationChartBarIcon className="size-8 text-center"/>
                </span>
                <p>

                Commander facilement
                </p>
            </p>
            <p className="mt-2 text-center">
                Nous vous permettons de passer de commande sur ce site sans carte de credit car pour raison de securité nos paient 
                à la livraison de leurs produits
            </p>
           </div>
           <div className="flex flex-col gap- items-center">
            <p className="font-b play text-3xl  text-emerald-500 bg-gr">
                <span className="bg-gray-200 ">
                    <SwatchIcon className="size-8"/>
                </span>
            </p>
            <p className="font-b play text-3xl  text-emerald-500 bg-gr">
                Certifier Longrich</p>
            <p className="mt-2 text-center">
                Nos produits sont soigneusement sélectionnés et respectent les critères d'utilisation et des conservations
                donnees par le multinational Longrich et ses stockiste locaux,
            </p>
           </div>

           
        </div>
       
      
        
      </div>
    </div>
  )
}
