import ImageSlider from '@/components/ImageSlider';
import SliderReview from '@/components/SliderReview';
import TextSlider from '@/components/TextSlider';
import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import HomeBanner from '@/components/HomeBanner';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import CategorySelect from '@/components/CategorySelect';
import Faq from '@/components/Faq';
import WhyChoseUs from '@/components/WhyChoseUs';
import Join from '@/components/Join';
import Slider from 'react-slick';
import { useEffect } from 'react';
import TagsMe from '@/components/TagsMe'; // Ensure this component is created
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import FeaturedCarousel from '@/components/FeaturedCaroussel';
import Head from 'next/head';
import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import Loader from '@/components/Loader';



export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const filePathReview = path.join(process.cwd(), 'data', 'reviews.json');
  const data = JSON.parse(fs.readFileSync(filePathReview, 'utf8'));

  const lotionProducts = products.filter((product) => product.category === 'Soins du corps');
  const diversProducts = products.filter((product) => product.category === 'Complement Alimentaire');
  const tags = Array.from(new Set(products.flatMap((product) => product.tags)));

  return {
    props: { lifestyleProducts: lotionProducts, reviews: data, lotionProducts, diversProducts, tags },
  };
}

export default function Index({ lifestyleProducts, reviews, lotionProducts, diversProducts, tags }) {
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
    }, 1000); // Simulate loading delay
  };
  return (
    <div className="relative max-w-5xl mx-auto  z-30 pt-6 bg-gray-">
      <Head>
        <title>Découvrez nos produits - Votre boutique en ligne</title>
        <meta name="description" content="Explorez notre gamme de produits de soins corporels et compléments alimentaires, les plus vendus et appréciés par nos clients." />
        <meta name="keywords" content="soins corporels, compléments alimentaires, boutique en ligne, produits populaires" />
        <meta property="og:title" content="Découvrez nos produits - Votre boutique en ligne" />
        <meta property="og:description" content="Explorez notre gamme de produits de soins corporels et compléments alimentaires, les plus vendus et appréciés par nos clients." />
        <meta property="og:image" content="/longrich.jpg" /> {/* Change to a valid image URL */}
        <meta property="og:url" content="https://www.longrich.vercel.app" /> {/* Replace with your actual URL */}
        <link rel="canonical" href="https://www.longrich.vercel.app" /> {/* Replace with your actual URL */}
      </Head>
      
      <div>
     
      {/* <TextSlider/> */}
      <TextSlider/>
      <div className="bg flex items-center fleco flex-col md:flex-row gap-3">

        <FeaturedCarousel/>
        <HomeBanner />
      </div>
      <div className="text-4xl lg:w-8/12 mx-auto text-center font-bold">
        Nos produits le plus vendus et les plus en demandes par nos clients
      </div>
      <div className="w-3/12 mx-auto h-2 my-3 bg-slate-800 rounded-xl"></div>
      <div className="text-lg px-3 lg:w-8/12 mx-auto text-center twz text-gray-500 my-3">
        La majorité des produits presenter si dessous sont vendus par centaine et il est souvent recommender de commander en
        avance dans le cas d'une rupture de stock
      </div>
        <ImageSlider lifestyleProducts={lifestyleProducts}/>

        {/* Tag Section */}
        <TagsMe tags={tags} />

        {/* Lotion Products Carousel */}
          {/* Divers Products Carousel */}
          <div className="text-4xl px-2 my-4 lg:w-8/12 mx-auto text-center font-bold">
          Decouvrez encore plus d'articles qui sont tres utiliser parmis nos clients 
          </div>
      <h2 className="md:text-xl mt-6  border p-3 rounded-full w-max mx-auto border-black mb-7 px-4">
        Complement Alimentaire
      </h2>
      <div className="w-10/12 bg-white shadow-x rounded-2xl mx-auto ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
          }}
        >
          {diversProducts.map((product) => (
            <SwiperSlide key={product.name}>
                <div  className="p-4 max-w-[340px]   bg mx-auto rounded bg-gray-0 mb-8">
          <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
          <div className="px-9 bg-gray grid place-content-center h-[122px] mb-4">

            <img src={product.image} alt={product.name} className="rounded-xl h-full w-[160px] object-cover" />
          </div>
            <h2 className="text-xl my-2 font-semibold bg-purpl  h-[60px] mt-">{product.name} </h2>

            <p className="text-gray-600 text-  h-[50px]">{product.smallDescription}</p>
            <p className="text-gray-600 underline">Q.{product.quantite}</p>
          {product.availability ? <span className="text-green-500">Disponible en stock</span>  :<span className="text-red-500">Pas Disponible en stock</span> }
          </Link>
            <div className="flex my-3 gap-5 items-center justify-around">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
        <h2 className="text-xl border p-3 mt-6 rounded-full w-max mx-auto border-black mb-7 px-4">
        Soins Corporel
      </h2>
      <div className="w-10/12 bg-white rounded-2xl mx-auto  ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
          }}
        >
          {lotionProducts.map((product) => (
            <SwiperSlide key={product.name}>
                <div  className="p-4 max-w-[340px]   bg mx-auto rounded bg-gray-0 mb-8">
          <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
          <div className="px-9 bg-gray grid place-content-center h-[122px] mb-4">

            <img src={product.image} alt={product.name} className="rounded-xl h-full w-[160px] object-cover" />
          </div>
            <h2 className="text-xl my-2 font-semibold bg-purpl  h-[60px] mt-">{product.name} </h2>

            <p className="text-gray-600 text-  h-[50px]">{product.smallDescription}</p>
            <p className="text-gray-600 underline">Q.{product.quantite}</p>
          {product.availability ? <span className="text-green-500">Disponible en stock</span>  :<span className="text-red-500">Pas Disponible en stock</span> }
          </Link>
            <div className="flex my-3 gap-5 items-center justify-around">
        <span className="text-2xl">${product.price}</span>
        <button 
        onClick={() => addToCart(product)}
        className="bg-gray-100 p-3 block relative  rounded-full">
          <span className=" absolute top-0 -right-2 size-5 rounded-full grid bg-white text-gray-600 shadow-2xl place-content-center">+</span>
        {loading ? <Loader/> : <ShoppingCart className="size-6 text-slate-700"/>}
        

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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        {/* Review Section */}
        <TextSlider />
        <div className="bg-gray-200 px  mt-8 p-4  w-full">
          <h2 className="text-3xl font-bold mb-6 mx-auto max-w-[330px] text-center">
            Avec plus de 50 clients satisfaits de nos services, la liste s'élargit
          </h2>
          <Link href="/"><span className="underline mx-auto max-w-[330px] block  gb bg text-lg font-bold my-6 text-center">VOIR PLUS DE REVUES</span></Link>
          <SliderReview reviews={reviews} />

        </div>

        <CategorySelect />
        <div className="bg-gray-50 py-5"><WhyChoseUs /></div>
        <Join />
        <Faq />
        <div><h1 className="text-4xl play mx-auto py-5 w-max">Longrich Caleb</h1></div>
      </div>
    </div>
  );
}