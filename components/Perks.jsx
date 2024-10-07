import { TruckIcon } from '@heroicons/react/24/solid'
import { CornerUpRightIcon, Shield } from 'lucide-react'
import React from 'react'

export default function Perks() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
   <div className="mt-2 text-center px-9">
    <CornerUpRightIcon className="text-gray-600 mx-auto borde size-[63px] rounded-full border-gray-400 p-3"/>
   <h2 className="text-lg underline underline-offset-1 my-ss">Expedition fiable</h2>
<p>
    Faite votre commande en toute securite et obtener votre produit livre as soon as possible
</p>
   </div>
   <div className="mt-4 text-center px-9">
    <Shield className="text-gray-600 mx-auto borde size-[63px] rounded-full border-gray-400 p-3"/>
   <h2 className="text-lg underline underline-offset-1 my-">100% Confidententialite </h2>
<p>
    Toutes les informations demander sur ce site web ne sont utiliser que pour 
    le service demander et ne seront livre a aucune personne
</p>
   </div>
   </div>
  )
}
