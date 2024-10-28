import ImageSlider from '@/components/ImageSlider';
import Reviews from '@/components/Review';
import TextSlider from '@/components/TextSlider';
import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import HomeBanner from '@/components/HomeBanner';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CategorySelect from '@/components/CategorySelect';
import Faq from '@/components/Faq';
import WhyChoseUs from '@/components/WhyChoseUs';
import Join from '@/components/Join';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const filePathReview = path.join(process.cwd(), 'data', 'reviews.json');
  const data = JSON.parse(fs.readFileSync(filePathReview, 'utf8'));

  // Filter for lifestyle products
  const lifestyleProducts = products.filter((product) => product.category === 'Lotion');

  return {
    props: { lifestyleProducts, reviews: data },
  };
}

export default function Index({ lifestyleProducts, reviews }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full z-30 pt-6">
      <div>
        <HomeBanner />
        <h1 className="text-4xl px-3 mb-7">
          Find products that will change your life for the better because you deserve it
        </h1>
        <div>
          <h1 className="text-4xl border p-3 rounded-full w-11/12 mx-auto border-black mb-7 px-4">
            Best Seller Lotions
          </h1>
          <div className="bg-gray-100">
            <ImageSlider lifestyleProducts={lifestyleProducts} />
          </div>
        </div>
        <Link href="/products">
          <span className="text-blue-500 underline text-3xl max- ma w-max my-3 mx-auto block">The product List</span>
        </Link>
        
        <TextSlider />

        {/* Review Slider */}
        <div className="bg-gray-100 px-4 py-4 mt-8">
          <h2 className="text-3xl font-bold mb-6 mx-auto max-w-[330px] text-center">
            Avec plus de 50 clients satisfaits de nos services, la liste s'élargit
          </h2>
          <p className="mx-auto max-w-[330px] text-center">
            Incluent les commentaires sur les produits Longrich ainsi que nos distributeurs
          </p>
          <Link href="/">
            <span className="underline mx-auto max-w-[330px] block  gb bg text-lg font-bold my-6 text-center">
              VOIR PLUS DE REVUES
            </span>
          </Link>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div className="flex-shrink-0 w-full" key={index}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 bottom-1 transform -translate-y-1/2 p-2 bg-opacity-20 backdrop-blur-2xl bg-gray-300 rounded-full shadow-lg  focus:outline-none"
            >
              <ArrowLeft/>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 bottom-1 transform -translate-y-1/2 p-2 bg-opacity-20 backdrop-blur-2xl bg-gray-300 rounded-full shadow-lg  focus:outline-none"
            >
              <ArrowRight/>
            </button>
          </div>
        </div>



        <CategorySelect/>
        <div className="bg-gray-100 py-5" >
          <WhyChoseUs/>
        </div>
        <Join/>
        <Faq/>
        <div>
          <h1 className="text-4xl play mx-auto py-5 w-max">
            Longrich Caleb 
          </h1>
        </div>
      </div>
    </div>
  );
}