import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Search({ query }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (query) {
            axios.get(`https://express-xzfm.onrender.com/producty?keywordsearch=${query}`)
                .then(response => setProducts(response.data))
                .catch(error => console.error(error));
        }
    }, [query]);

    return (
        <div className="w-11/12 mx-auto  min-h-screen">
            <p className="text-sm lg:w-2/4 text-gray-500 flex items-center gap-1 p-2 border border-dotted rounded-3xl ">
                <span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                </span>
                Si vous ne trouver pas ce que vous chercher a partir de la barre de recherche , vous pouver essayer de taper un autre mot cle ,
                ou tout simplement consulter notre catalogue qui vous donnera acces au categorie

            </p> 
            <h1 className="italic text-lg p-4"> Voici les resultats de recherche pour "{query}"</h1>
            <div className=" px-5 grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto  lg:grid-cols-3  place-items-center">
                {products.map(product => (
                   <div key={product.id} className="m-3 bg--100 border-2 border-dotted bg-opacity-50 p-8  rounded-3xl w-[260px]">
                   <h2 className="font-bold text-lg">{product.name}</h2>
                   <img className="size-[120px] object-cover" src={`https://express-xzfm.onrender.com/uploads/${product.image}`} alt={product.name} width="100" />
                   <div className="flex items-center justify-between">
                   <p className="text-[20px]  font-semibold text-gray-900">${product.price}
                   
                   <span className="line-through text-[18px] italic ml-2">${product.priceDiscount}</span>
                                           </p>
                   <a className=" px-2 py-2 text-emerald-700" href={`/products/${product.id}`}>View </a>
                   </div>
                   <div className="text-sm p-1 text-gray-500">
                       {product.description}
                   </div>
                   <button  className="transition-all flex text-sm px-4 mx-auto  bg-emerald-700 text-white border rounded-full hover:ring  hover:ring-emerald-500 py-2 gap-1 ml-2" onClick={() => addToCart(product)}>
                       Ajouter au panier
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                       </svg>

                       </button>
               </div>
                ))}
            </div>
           
        </div>
    );
}

Search.getInitialProps = ({ query }) => {
    return { query: query.q || '' };
};
