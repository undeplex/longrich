import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '../../atoms/cartAtom';

import { ChevronDown, Home, LucideRocket, RocketIcon, ShoppingCart } from 'lucide-react';
import Loader from '@/components/Loader';
import LoaderWhite from '@/components/LoaderWhite';
import Perks from '@/components/Perks';
import ProductList from '@/components/ProductList';
import { FireIcon } from '@heroicons/react/24/solid';


export async function getServerSideProps(context) {
  const { slug } = context.params;
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const product = products.find(p => p.name === slug);
  const relatedProducts = products.filter(p => p.category === product.category && p.name !== product.name);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
}

export default function ProductPage({ product, relatedProducts }) {
 
  const [cart, setCart] = useAtom(cartAtom);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const addToCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPopup(true);

      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        // Update quantity if already in cart
        setCart(cart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        // Add new item to cart
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      setTimeout(() => setPopup(false), 2000); // Popup disappears after 2 seconds
    }, 1500); // Simulate loading delay
  };
  return (
    <div className=" px-3 max-w-5xl relative  mx-auto">
      <div className="mx-auto w-max ">

      </div>
      <div className=" flex lg:flex-row md:flex-row flex-col lg:gap-16  md:gap-7">
           <div className=" md:w-5/12">

                <div className="breadcrumb-mockup text-[16px] bg w-max">
                <div className=" mt-5 ">
                    <a href="/">
                    <Home className="size-4 inline text-gray-700"/>
                    </a>
                   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                   
                    <a href="/products">catalogue</a>
                  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                  
                    <a href={`/category/${product.category.toLowerCase()}`} className="">{product?.category}</a>
                  
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    <span className="truncate m max-w-[160px] sm:max-w-[500px]">{product.name}</span> */}
                    
                </div>

                 </div>
                 <img src={product.image} alt={product.name} className="mx-auto lg:w-[285px] block  md:w-[270px] w-8/12 py-3 rounded-xl " width="200"/>

</div>

   <div className=" lg:w-9/12 md:w-/12  lg:pt-10 md:pt-9">

        <p>LONGRICH STOCK l'shi</p>
    <h2 className="font-bold ply lg:text-3xl  text-3xl justify-between flex gap-2 items-center"> {product.name} </h2>                           
                <div className="flex gap-1 my-1 items-center  play">
                    <span className="play font-bold text-lg text-0 -yellosm:w-7 w-70">4.3 </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500 sm:w-7 w-70">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                           
                <p className="text-sm">(89 Avis )</p>

                </div>
                {popup && <p className="text-green-500 right-0 bg-white my-3">{product.name} a été ajouter dans le panier avec success</p>}
               <div className="text-gray-500  my-4 ">
               {/* <p dangerouslySetInnerHTML={{ __html: product?.description }}></p>  */}
                </div> 
          
          <div className="flex gap-2 items-center mt-4 mb-2">
                                <p className="text-2xl font-bold   ">USD ${product.price}</p>
          </div> 
                                <p className="text-lg  text-gray-600 my-3">{product.smallDescription}</p>
                                <p className="">Arome: Menthe </p>
                                <p className="">Contenu net: {product.quantite}</p>

                                <p className="mt-2">
                                {product.availability ? <span className="text-green-500">Disponible en stock</span>  :<span className="text-red-500">Pas Disponible en stock</span> }</p>

          <div className="flex gap-2 et text-sm">          
          </div>

          <div className="sm:flex md:flex-col lg:flex-row sm:flex-col  sm:items-start sm:text-sm hidde sm:max-w mt-4  gap-6 lg:flex md:flex  items-center ">
          <button
        className="bg-black w-full py-4 text-white p-2 rounded mt-4"
        onClick={() => addToCart(product)}
        disabled={loading}
      >
        {loading ?<div className="mx-auto  w-max"> <LoaderWhite/> </div>: 'Add to Cart'}
      </button>

              <div className="flex my-2 gap-2 text-sm items-center"><LucideRocket className="text-gray-600 inline mt-2 w-1/12" />
              <div className=" w-11/12">

              <p className="font-bold">Livraison A Lubumbashi & Kolwezi Possible !</p> 
              <p>

              Nous livrons vos produits commander le plus vite 
              </p>
              </div>
              </div>
          </div>
    </div>  
 
</div>
        
      <div className="max-w-l mx-auto">
      <div className="tag-section">
  <h2 className="text-emerald-600 font-bold mb-4">Tags</h2>
  <div className="flex flex-wrap gap-3">
    {product.tags.map((tag, index) => (
        <Link key={index} href={`/tags/${tag}`}>
          <span className="m-2 px-4 py-1 bg  border rounded-full">
            {tag}
          </span>
        </Link>
      ))}
  </div>
</div>


<div>
  <h1 className="text-gray-500 text-xl flex gap-3 my-2 justify-between mt-5">DETAIL <ChevronDown/></h1>
    <p className="mb-4">
      {product.description}
    </p>
</div>
<div>
  <h1 className="text-gray-500 text-xl flex gap-3 my-2 justify-between">UTILISATION <ChevronDown/></h1>
    <p className="mb-7">
      {product.usage}
    </p>
</div>
<div>
  <h1 className="text-gray-500 text-xl flex gap-3 my-2 justify-between">FONCTIONS <ChevronDown/></h1>
    <p className="mb-7">
      {product.fonction}
    </p>
</div>
<div>
  <h1 className="text-gray-500 text-xl flex gap-3 my-2 justify-between">INGREDIENTS <ChevronDown/></h1>
    <ul className="mb-7 list-inside px-3">
    {product.ingredient.map((ingredient, index) => (
      <li key={index} className="mb-1 list-disc">
        {ingredient}
      </li>
    ))}
    </ul>
</div>
        <div className="text-center">Connect with us :</div>
                <div className="flex gap-5 sm:gap-4 my-3 w-max mx-auto ">
                        
                        <svg className="fill-gray-800 sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        
                        <svg className="fill-gray-800 sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>                      
                              <svg className="fill-gray-800 sm:w-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                        <svg className="fill-gray-800 sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>   
                              <svg className="fill-gray-800 sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </div>

<Perks/>

        <h2 className="text-2xl my-3 font-semibold mt-8">Les produits si dessous pourraient aussi vous interessez</h2>
        <div className="grid grid-cols-2 bg- md:grid-cols-3 gap-4  px- ">
      {relatedProducts.map((product) => (
        <div key={relatedProducts.id} className=" px- red-200 max-w-[340px] my-3 bg mx-auto rounded bg-gray-0">
          <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
            {product.featured && <>
              <div className="text-white w-max bg-emerald-500 -rotate-[23deg] g-opacity-15 px-3 py-2 text-sm">
              Populaire  <FireIcon className="inline size-4"/>
              </div>
            
            </>}
            {!product.featured && <>
              <div className="text-white w-max bg-orange-500 -rotate-[23deg] g-opacity-15 px-3 py-2 text-sm">
              Tendence <RocketIcon className="inline size-4"/>
              </div>
            
            </>}
         
          <div className="px-9 bg-gray grid place-content-center h-[122px] mb-4">

            <img src={product.image} alt={product.name} className="rounded-xl h-full w-[160px] object-cover" />
          </div>
            <h2 className="text-xl my- font-semibold bg-purpl  h-[70px] mb-3 w-11/12 mt-">{product.name} </h2>

           
            <p className="text-gray-600 underline">Q.{product.quantite}</p>
          {product.availability ? <span className="text-green-500">Disponible en stock</span>  :<span className="text-red-500">Pas Disponible en stock</span> }
          </Link>
            <div className="flex my-3 gap-5 items-center justify-between">
        <span className="text-2xl">${product.price}</span>
        <button 
        onClick={() => addToCart(product)}
        className="bg-gray-100 p-3 block relative  rounded-full">
          <span className=" absolute top-0 -right-2 size-5 rounded-full grid bg-white text-gray-600 shadow-2xl place-content-center">+</span>
        {loading ? <Loader/> : <ShoppingCart className="size-5 text-slate-700"/>}
        

      </button>
      </div>
        <span className="underline">{product.category.toUpperCase()}</span>
      {popup && <p className="text-green-500 mt-2">{product.name} added to cart</p>}
          {/* <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add to Cart
          </button> */}
        </div>
      ))}
    </div>
        </div>
      
    </div>
  );
}