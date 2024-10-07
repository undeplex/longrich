import { ShoppingCartIcon,ShoppingBagIcon } from 'lucide-react'
import React from 'react'

export default function CloneHome() {
  return (
    <div className=" px-2  -100 text-center flex wma  flex-col gap-1 mt-8 s justify-between ">
      <div className="w-full relative h-full bg-red-200">
         <img src="plause4.jpg"/>
         <div className="w-full bg-black bg-opacity-40 absolute inset-0"></div>
         <div className="w-1/2   sm:h-1/2  rounded-3xl bg-opacity-30 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <div className="text-center">
              <div className="play text-white  sm:mt-4 text-xl">
                TIME IS UP
              </div>
              <div className="play font-bol text-white mt-1 sm:mt-4 text-3xl sm:text-4xl">
                COMMENCER A GAGNER
              </div>
              <div className="play text-white mt-4 text-xl hidden sm:block">
                    Gagner a votre propre rythme ,timing et tout du temps de qualite pour votre famille
              </div>
              
             
            </div>
         </div>
      </div>
      
       
    </div>
  )
}