import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const products = require('../data/products.json');
  const tags = Array.from(new Set(products.flatMap((product) => product.tags)));
  return { props: { tags } };
}

export default function TagsMe({ tags }) {
  return (
    <div className="px-4">
      <h1 className="text-4xl my-4 text-center font-bold mb-2  ">Trouvez ce que vous cherchez selon vos preocupations</h1>
      <h1 className="text- text-gray-600 text-center">Les plus populaires,probleme de santé ,supplement alimentaire. etc</h1>
      <h1 className="text- text-gray-600 text-center">Renforcement  du système immunitaire ,nutriment.Nous avons ce qu'il vous faut</h1>
      <p className="underline my-2 mx-auto text-center">
        <QuestionMarkCircleIcon className="size-4 inline"/>Clicker sur une des options si dessous pour voir tous les produits proposés liés à ce dernier
      </p>
      <div className="flex flex-wrap  gap-1 mt-4 pt-4 ">
        {tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <span className="px-4 py-2 m- block border text-sm border-black  rounded-full hover:border-none hover:bg-gray-100 transition duration-200">
              {tag}
            </span>
          </Link>
        ))}
      </div>
      <a href="/" className="underline italic mt-3 block text-center text-gray-500">Afficher plus de tags</a>
    </div>
  );
}