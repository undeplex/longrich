import { BoldIcon, BoltIcon, StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function BlockBest() {
  return (

    <div className="grid px-3 grid-cols-1 md:grid-cols-2 place-items-center gap-5">
        <div className="rounded-2xl    place-items-center  gap-6 max-w-[560px] bg-white shadow-sm p-4">
          <div className="flex gap-6 flex-col sm:flex-row">
          <div className="min-w-[30%] flex flex-col justify-between">
            <div className="mx-auto w-max flex gap-1 text-gray-500 font-bold ">
                  4.5
                  <StarIcon className="w-5 text--500"/>
                </div>
                <img src="img/savon.webp" className="mx-auto my-2 " width="100"/>
                <p className="play font-bold text-center text-2xl text-gray-800 play">
                  (45 avis) 
                </p>
              </div>
              <div>
                <h2 className="play text-2xl md:text-3xl font-bold bg-red-200ss">
                  Savon de l'avage artemisia Longrich 
                </h2>
                <p className="text-gray-500 my-2 lg:text-lg text-sm">
                  C'est l'un de meilleur savon contre les infections le plus courant de la peau
                  sur tous les types de personnes
                </p>
                <p className="pla justify-between my-2  flex">
                <button className=" p-3 rounded-full text-emerald-500 bg-emerald-500 bg-opacity-15">
                   <BoltIcon className="w-5"/>
                </button>
                   <span className="font-bold text-2xl text-gray-800 play">8,12 USD</span>
                   <Link href={`/product/22`}>
                   
                   <span className="text-emerald-500 underline">Learn more</span>
                  </Link>                 </p>
              </div>
          </div>
        </div>



        <div className="rounded-2xl    place-items-center  gap-6 max-w-[560px] bg-white shadow-sm p-4">
        <div className="flex gap-6 flex-col sm:flex-row">
        <div className="min-w-[30%] flex flex-col justify-between">
          <div className="mx-auto w-max flex gap-1 text-gray-500 font-bold ">
                  5
                  <StarIcon className="w-5 text--500"/>
                </div>
                <img src="img/creme.webp" className="mx-auto my-2 " width="100"/>
                <p className="play font-bold text-center text-2xl text-gray-800 play">
                  (12 avis) 
                </p>
              </div>
              <div>
                <h2 className="play text-2xl md:text-3xl font-bold bg-red-200ss">
                  Caffee Easy
                </h2>
                <p className="text-gray-500 my-2 lg:text-lg text-sm">
                  Non seulement vous delight mais aussi permet de rendre votre digestion smooth et donne le stimulus pour un bon travail
                </p>
                <p className="pla justify-between my-2  flex">
                <button className=" p-3 rounded-full bg-emerald-500 bg-opacity-15">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-emerald-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
                   <span className="font-bold text-2xl text-gray-800 play">3,4 USD</span>
                   <Link href={`/product/29`}>
                   
                   <span className="text-emerald-500 underline">Learn more</span>
                  </Link>                 </p>
              </div>
          </div>
        </div>
        <div className="rounded-2xl    place-items-center  gap-6 max-w-[560px] bg-white shadow-sm p-4">
        <div className="flex gap-6 flex-col sm:flex-row">
        <div className="min-w-[30%] flex flex-col justify-between">
                <div className="mx-auto w-max flex gap-1 text-gray-500 font-bold ">
                  5
                  <StarIcon className="w-5 text--500"/>
                </div>
                <img src="img/dentifrice.webp" className="mx-auto my-2 " width="100"/>
                <p className="play font-bold text-center text-2xl text-gray-800 play">
                  (7 avis) 
                </p>
              </div>
              <div>
                <h2 className="play text-2xl md:text-3xl font-bold bg-red-200ss">
                  Dentifrice au the Blanc Longrich
                </h2>
                <p className="text-gray-500 my-2 lg:text-lg text-sm">
                  Ce dentifrice eclairci vos dent en plus de les proteger contre certaines infections
                </p>
                <p className="pla justify-between my-2  flex">
                <button className=" p-3 rounded-full text-emerald-500 bg-emerald-500 bg-opacity-15">
                   <BoltIcon className="w-5"/>
                </button>
                   <span className="font-bold text-2xl text-gray-800 play">2,9 USD</span>
                   <Link href={`/product/21`}>
                   
                   <span className="text-emerald-500 underline">Learn more</span>
                  </Link>                </p>
              </div>
          </div>
        </div>
        <div className="rounded-2xl    place-items-center  gap-6 max-w-[560px] bg-white shadow-sm p-4">
        <div className="flex gap-6 flex-col sm:flex-row">
        <div className="min-w-[30%] flex flex-col justify-between">
                <div className="mx-auto w-max flex gap-1 text-gray-500 font-bold ">
                  5
                  <StarIcon className="w-5 text--500"/>
                </div>
                <img src="img/pills.png" className="mx-auto my-2 " width="100"/>
                <p className="play font-bold text-center text-2xl text-gray-800 play">
                  (32 avis) 
                </p>
              </div>
              <div>
                <h2 className="play text-2xl md:text-3xl font-bold bg-red-200ss">
                  Pillules de Zendex Longrich
                </h2>
                <p className="text-gray-500 my-2 lg:text-lg text-sm">
                  Ce pillules etaient specialement concu pour renforcer votre systeme immunitaire en general
                </p>
                <p className="pla justify-between my-2  flex">
                <button className=" p-3 rounded-full bg-emerald-500 bg-opacity-15">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-emerald-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
                   <span className="font-bold text-2xl text-gray-800 play">10,1 USD</span>
                   <Link href={`/product/18`}>
                   
                    <span className="text-emerald-500 underline">Learn more</span>
                   </Link>
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}
