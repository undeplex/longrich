import React from 'react'
import { useState } from 'react';
export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p- my-4 rounded-2xl">
        <h1 className="text-4xl play text-center my-6 font-bold p-3">FAQ</h1>
                  <div className="">
        {[
          { title: "QUI SOMMES NOUS", content:<div className="">Un groupe de distributeur
          de produit de la multinational Longrich, physiquement localiser a Lubumbashi ,nous 
          faisons de livraison à Lubumbashi et expedions partout en RDC, nous avons conduisons 
          de meme ceux qui sont dans les pays etrangers <span className="underline">
          consuler la liste de pays dans le quel
          Longrich opere et voir la faisabilité de la commade</span> 
          
          </div>  },
          { title: "COMMENT COMMANDER", content: <div className="">
          Ajouter le produit voulu dans le panier , une fois dans le panier , vous pouvez acceder a ce dernier et/ou
           augmenter la quantité qu'on veut commander , une fois pres , appuyer sur "proceder a la commande",
           une fois fait , vous serez appelé à inserer quelques informations qui nous permettrons de definir
           la meilleur facon de vous faire parvenir le produit selectionner, enfin appuyer sur "Terminer la commande",
           et on vous envoyera des details sur votre commandes dans votre boite mail a partir de l'addresse que 
           vous auriez donnee
          </div> },
          { title: "CONCERNANT LA GARANTIE", content: <div className="">
           Tous les produits acheter ou commandé officielement à partir de ce site ou à partir d'un
           partenaire/distributeur officiel de produits Longrixh ont une guarantie de retour ; selon les 
           <span className="underline">conditions de retour </span> apres achat de tous les types de produits
          </div> },
          { title: "QUI PEUT DEVENIR MEMBRE", content: <div className="">
           Tous les mondes peut devenir partenaire de la multinational Longrich et ainsi avoir une liberte financiere tout en 
           gardant control sur son propres temps de travail ,aussi longtemps que Longrich exist dans votre pays , vous pouvez devenir partenaire et/ou 
           distributeur officiel apres enregistrement.
          </div> },
          
      
        ].map((section, index) => (
          <div key={index} className="border-b ">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left my-2 focus:outline-none hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex justify-between items-center px-1">
                <span className="font-bold p-4">{section.title}</span>
                    {activeIndex === index && <div className="text-2xl te font-bold">-</div>}
                    {activeIndex !== index && <div className="text-2xl te font-bold">+</div>}
              </div>
            </button>
            <div
              className={`overflow-hidden  text-gray-700 text-[15px] transition-[max-height] duration-500 ease-in-out ${
                activeIndex === index ? "max-h-[630px]" : "max-h-0"
              }`}
            >
               <div className="py-1 px-3">
                {section.content}
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
