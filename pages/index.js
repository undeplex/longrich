import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import StickySlider from '@/components/StickySlider';
import Layout from '@/components/Layout';
import Comment from '@/components/Comment';
import { Button } from '@/components/ui/button';
import { AlarmCheck, AlertCircle, AlertTriangleIcon, ArrowDown, MessageCircle, Quote, TextQuote } from 'lucide-react';
import { PlayIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Join from '@/components/Join';
import Faq from '@/components/Faq';
import Slider from '@/components/Slider';
import SlideMe from '@/components/SlideMe';
import HomeBanner from '@/components/HomeBanner';
import BeforeAfter from '@/components/BeforeAfter';
import PersonalKit from '@/components/PersonalKit';
import SingleAfterBefore from '@/components/SingleAfterBefore';
import BlockBest from '@/components/BlockBest';
import TextSwitcher from '@/components/TextSwitcher';
import WhoAreWe from '@/components/WhoAreWe';
import WhyChoseUs from '@/components/WhyChoseUs';
import TextSwitcherClone from '@/components/TextSwitcherClone';

export default function Home() {
    const [products, setProducts] = useState([]);
    const simpletest="I was so much amazed about how LongrichCaleb was able to deliver and walk me through my buying of Lg product , indeed i was me for all"

    useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    const fetchFeaturedProducts = async () => {
        try {//producty will be change later as we can't use no two get product stuff or whatever
            const response = await axios.get('https://express-xzfm.onrender.com/producty?isPopular=featured');
            setProducts(response.data);
        } catch (err) {
            console.error('Failed to fetch products', err);
        }
    };

    return (
        <Layout>
            

        <div className="bg-gray-100 relative  lg:max-w-5xl max-w-4xl overdl overflow-hidden  mx-auto min-h-screen">   
       <section>
<StickySlider/>
        
        <TextSwitcher/>
        <div className=" px-2  -100 text-center flex wma  flex-col gap-1 mt-8 s justify-between ">
        <div className="text-l text-gray-500">DELIVERING SINCE 2021</div>
        <div className="text-2xl bol play font-bold">Longrich Store By Caleb</div>
        <div className="text-xl ">Decouvre des produits de qualites</div>
        <div className="text- md:w-8/12 mx-auto">
          Votre jouney pour des produists de sante et bien-etre de worl-class quality.
          Devenez aussi partenaire et profitez de notre engagement envers la qualite, la rapidite et la securisation 
          des livraisons
        </div>
        <button  className="  my-3  mx-auto sm:w-max w-ful text-center zi -50  bg-gradient-to-bl text-black bg-emerald-500 bg-opacity-10 px-3 py-4 rounded-xl gap-2">
          <div className="w-max mx-aut text-lg text-gray-700">

                    Visiter notre shop Online
                    <ShoppingCartIcon className="inline text-3xl w-6 ml-2"/>
          </div>
        </button>
        </div>
        <p className="play text-3xl text-center">Decouvrez Longrich pour</p>
        <ArrowDown className="text-center mx-auto my-1 size-8 animate-bounce"/>
        <Slider/>
        <div className="play text-2xl mb-3 text-center">
            Decouvrez nos produits les plus aimes
        </div>
        <BlockBest/>
        
       </section>
            <section className="bg-emerald-00 p-2 zin z-40 sm:mb-2 mb-[35px]">
                <p className="text-gray-500 text-lg mt-2 text-center">99% D'AVIS POSITIFS</p>
                <p className="text-gray-500 text-lg mt-2 text-center">LIVRAISON A LUBUMBASHI</p>
                <p className="text-gray-500 text-lg mt-2 text-center">GARANTIE DE RETOUR A 100%</p>
            </section>
<TextSwitcherClone/>
<SlideMe/>
        
                 
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto lg:grid-cols-4 px-2">
                {products.map((product) => (
                   <div key={product.id} className="m-3 bg-gradient-to-b from-white via-white to-transparent mx-auto  rounded-xl lg:p-8 md:p-6 p-3   max-w-[290px]">
                        <p className="px-2 py-1 text-sm bg-emerald-500 text-emerald-500 w-max my-2 bg-opacity-15 ">{product.price - 67}% off</p>
                    <img className="lg:size-[125px] md:size-[120px] size-[100px] object-cover " src={`https://express-xzfm.onrender.com/uploads/${product.image}`} alt={product.name} width="20" />
                    
                    
                        <Link href={`/freestyle1/${product.id}`}>
                    <h2 className="font-bold text-lg mt-1 play ">
                            {product.name} Longrich
                        </h2>
                        <div className="flex items-center m w-max justify-between">
                                <p className="text-[15px]   text-gray-900">USD ${product.price}      
                                <span className="line-through text-[14px] text-gray-700 italic ml-2">USD ${product.priceDiscount}</span>
                                </p>
                        </div> 
                                          
                  {product.category == "soins corporel" && <div className="bg-purple-500 px-4 w-max py-1 my-2 text-center text-[12px]  rounded-full bg-opacity-15 text-purple-500">{product.category}</div>}
                  {product.category == "hygiene" && <div className="bg-blue-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-blue-500">{product.category}</div>}
                  {product.category == "lotion" && <div className="bg-yellow-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-yellow-500">{product.category}</div>}
                  {product.category == "immunite" && <div className="bg-teal-500 px-4 w-max py-1 my-2 text-center rounded-full  text-[12px] bg-opacity-15 text-teal-500">{product.category}</div>}
                  {product.category == "nutrition" && <div className="bg-indigo-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-indigo-500">{product.category}</div>}
                  {product.category == "" && <div className="bg-red-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>}

                    </Link> 
                  
                  </div>
                ))} 

             </div> */}
             <div className="grid col-span grid-cols-1 md:grid-cols-2  gap-3">

             <WhoAreWe/>
            <Join/>
             </div>
             <WhyChoseUs/>
             <Comment/>
            <Faq/> 
          
        </div> 
        </Layout>
    );
}


   {/* <button  className="transition-all flex text-sm px-4 mx-auto  bg-emerald-700 text-white border rounded-full hover:ring  hover:ring-emerald-500 py-2 gap-1 ml-2" onClick={() => addToCart(product)}>
                       Ajouter au panier
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                       </svg>

                       </button> */}