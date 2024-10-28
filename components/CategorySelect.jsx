import React from 'react'
import Link from 'next/link'
export default function CategorySelect() {
  return (
    <div className="p-3">
        <h1 className="text-3xl mb-4">
            Retrouver le produit Recherché par Categorie
        </h1>
        <div className="flex flex-wrap gap-3 ">

            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Cosmetique
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Divers & Outillages
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Lotion & Pommade
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Soins Corporel
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Soins & Rafia
                </button>
            </Link>
            <Link href="/">
                <button className="px-5 py-3 rounded-full border-black border">
                    Immunite & Alimentaire
                </button>
            </Link>
        </div>
    </div>
  )
}
