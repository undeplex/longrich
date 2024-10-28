import React from 'react'
import TextSlider from './TextSlider'
import Link from 'next/link'
export default function HomeBanner() {
  return (
    <div className="px-3">
      <div className="rounded-xl w-11/12 mx-auto h-[190px]  overflow-hidden px-">
        <img src="/feat.jpeg" className="w-full h-full object-cover"/>
      </div>
        <p className="text-sm text-left pl-4 text-gray-400">Savon de Bambo efficace contre les acnees</p>
      <TextSlider/>
      <p className="text-gray-700 text-xl my-3">
        Longrich Store vous proposes de produits de Qualité; certifier et naturel qui
        marchent avec guarantie de retour d'achat à 100%
      </p>
      <Link href="/products">
      
      <button className="text-3xl underline underline-offset-1 mx-auto block my-5 text-emerald-500">VISITER NOTRE SHOP</button>
      </Link>
    </div>
  )
}
