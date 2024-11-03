import React from 'react'
import TextSlider from './TextSlider'
import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ArrowUp } from 'lucide-react'
export default function HomeBanner() {
  return (
    <div className="px-4 mt-3 md:mt-0">
      
     
      
      
      <div className="text-xl mb-7 bg-gray-100 rounded-xl p-4 max-w-[450px] mx-auto">
          Utiliser des produits de santé et cosmétique qui bousterons votre quotidient ,
          parceque vous le meritez
          <Link href="/products">
      
      <button className="text-lg lg:w-8/12 bg-white text-black fset-1 mx-auto flex items-center px-5 py-3 rounded-full mx- mt-3">Visiter notre shop<ShoppingBagIcon className="size-6 text-gray-600"/></button>
      </Link>
        </div>
      <ArrowUp className="mx-auto"/>
        <p className="text-gray-700 text-sm underlin my-3 w mx-auto">
        Longrich Store vous proposes de produits de Qualité; certifier et naturel qui
        marchent avec guarantie de retour d'achat à 100%,Cliquer sur visiter notre shop 
        pour voir notre catalogue de produit 
      </p>
    </div>
  )
}
