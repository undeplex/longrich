import React from 'react'
import { Quote, TextQuote } from 'lucide-react';
import SingleComment from './SingleComment';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

export default function Comment() {
  return (
    <>
    <div className="play text-4xl mx-3 my-3 text-gray-800">
        Ce que les gens disent a propos de Longrichstore By Caleb
    </div>
    <div className="relative mx-3   bg-gray-40 maskme md:maskme ">
    <div className=" space-y- grid lg:grid-cols-3  grid-cols-1 sm:grid-cols-2 gap-3 ">
        <SingleComment
         comment="Ca fait un bon moment que j'utilise le caffee anti douleur et j'aime trop ce denier "
         nameCommentor="Peter Nzana"
         dateOfComement="October 4th 2021"
         image={<img src="/cmt/img3.jpg" className="img-comment "/>}
        />
        <SingleComment
         comment="La livraison etait franchement rapide et est toujours vu que Longrichstore prend soins de la rapidité et de la satisfaction de ses clients"
         nameCommentor="Caleb Muhiya"
         dateOfComement="October 15th 2021"
         image={<img src="/cmt/img2.jpg" className="img-comment "/>}
        />
        <div className="sm:-translate-y- ">

            <SingleComment
            comment="Longrichstore m'a fourni des informations necessaires pour faire connaissance de details de produits Longrich dont je suis maintenant fan inconditionnelles"
            nameCommentor="Nathan mpiana"
            dateOfComement="December 3rd 2021"
            image={<img src="/cmt/img1.jpg" className="img-comment "/>}
            />
        </div>
        <div className="sm:-translate-y- lg:-translate-y-10">
            <SingleComment
            comment="Je suis devenu fan de services de Longrichstore il y'a maintenant deux ans ,et je suis toujours partant pour tous ce qui est de la remunerations"
            nameCommentor="jennifa"
            dateOfComement="May 30th 2023"
            image={<img src="/cmt/img4.jpg" className="img-comment "/>}
            />
        </div>
        <div className="sm:-translate-y-10 md:-translate-y-5  ">
            <SingleComment
            comment="Nous vivons à une époque où les details sur les produits sont tres important et LongrichStore met un accent sur les details de produits Longrich"
            nameCommentor="Marshall "
            dateOfComement="November 6th 2023"
            image={<img src="/cmt/img5.jpg" className="img-comment "/>}
            />
        </div>
        <div className="sm:-translate-y-0 lg:-translate-y-">
            <SingleComment
                comment="La premiere fois que j'ai fait mes achats sur ce site je croyais que le ecommerce etait l'une de meilleur facon de shopping et j'avais surement raison. thanks !!"
                nameCommentor="Richard Nday"
                dateOfComement="Jully 1st 2023"
                image={<img src="/cmt/img6.jpg" className="img-comment "/>}
            />
        </div> 
      
       
       
      
            </div>  
       
    </div>
        <button className="px-4 underline text-gray-600 underline-offset-1  py-3  mx-auto mb-8 w-max block">
            Afficher plus de commentaires
       </button>
    </>
  )
}
