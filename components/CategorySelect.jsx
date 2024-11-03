import React from 'react'
import Link from 'next/link'
export default function CategorySelect() {
  return (
    <div className="p-3">
        <h1 className="text-3xl my-4 font-bold text-center mb-4">
            Retrouver le produit Recherché par Categorie
        </h1>
        <div className="flex flex-wrap gap-3 mt-4 mb-4 ">

            <Link href="/category/Soins corporel">
                <button className="px-5 text-sm py-3 hover:border-none  hover:bg-gray-100 b-rgr rounded-full border-black border">
                    Cosmetique
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 text-sm py-3 hover:border-none  hover:bg-gray-100 b-rgr rounded-full border-black border">
                    Complement Alimentaire
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 text-sm py-3 hover:border-none  hover:bg-gray-100 b-rgr rounded-full border-black border">
                   Produits de santé
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 text-sm py-3 hover:border-none  hover:bg-gray-100 b-rgr rounded-full border-black border">
                   Divers & Autres
                </button>
            </Link>
           
            <Link href="/products">
                <button className="px-5 text-sm py-3 hover:border-none  hover:bg-gray-100 b-rgr rounded-full border-black border">
                    Tous les produits
                </button>
            </Link>
        </div>
    </div>
  )
}
