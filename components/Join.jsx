import React from 'react'
import { LucideSquareDashedMousePointer } from 'lucide-react'
import Link from 'next/link'

export default function Join() {
  return (
    <div className="pb-12 rounded-br-2xl bg-emerald-500   w-full p-3 lg:p-5 md:p-4  text-fuchsia-50">


            <div className=" wmax  mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mx-auto -rotate-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

                <h1 className="play text-center font-bold text-4xl text-white   ">
                   Tu veux devenir partenaire ?
                </h1>
                <p className="text-left lg:w-8/12 mx-auto md:text-center   my-5 te text-gray-100">
                Etant distributeur de produit Longrich tu as control sur ton temps de travail en plus d'etre
                remunerer pour tes efforts de ventes
                </p>
                <Link href="/adhesion">
                <button className="w-full max-w-[423px]   space-x-2 mx-auto flex items-center bg-white text-black justify-center py-3 px-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>

                   Comment Devenir Partenaire ?</button>
                </Link>
           
    
        </div>
    </div>
  )
}
