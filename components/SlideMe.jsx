import React from "react";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import axios from "axios";
import SingleStuff from "./SingleStuff";
import { ArrowLongLeftIcon, ArrowLongRightIcon, BoltIcon } from "@heroicons/react/24/solid";
function SlideMe() {
    const [products, setProducts] = useState([]);
    const simpletest="I was so much amazed about how LongrichCaleb was able to deliver and walk me through my buying of Lg product , indeed i was me for all"

    const [clothingProducts, setClothingProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/products.json'); // Fetch the mock JSON file
          // Filter products by the "Clothing" category
          const clothing = response.data.filter(product => product.category === 'hygiene');
          setClothingProducts(clothing);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  var settings = {
    dots: true,
    infinite: false,autoplay: true,   autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
     cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,autoplay: true,   autoplaySpeed: 3000,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,autoplay: true,   autoplaySpeed: 3000,
          initialSlide: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,autoplay: true,   autoplaySpeed: 3000,
          initialSlide: 2
        }
      },
    
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,autoplay: true,   autoplaySpeed: 3000,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container  b-white my-8  pb-14">
       
      <Slider {...settings}>
      
          {clothingProducts.map((product)=> (
                    

                   <div key={product.id} className="rounded-br-3xl bg-white to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                    <div className="flex items-center justify-between">
                        <div className="bg-red-400 bg-opacity-10 text-sm text-red-400  size-[43px] rounded-full grid place-content-center p-3">
                         -10% 
                        </div>
                    </div>
                    <img className="lg:size-[125px] mx-auto my-2 md:size-[120px] size-[100px] object-cover " src={`/uploads/${product.image}`} alt={product.name} width="20" />
                    
                    
                        <Link href={`/product/${product.id}`}>
                <div className="flex b flex-col   justify-between">

                          <div>
                                <h2 className="font-bold text-lg pla wh break-words text-wrap">
                                      {product.name} Longrich 
                                  </h2>
                                  <div className="flex items-center m w-max justify-between">
                                          <p className="text-[20px]   text-gray-900">USD ${product.price}      
                                          </p>
                                  </div>
                                  <div className="flex justify-between px-2">
                                
                                <button className="border border-gray-100 p-3 rounded-full bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                                <button className="border p-3 rounded-full bg-opacity-20 bg-emerald-500 text-emerald-500">
                                <BoltIcon className="w-4"/>

                                </button>
                            </div>
                          </div>
                          <div>
                                      
                              {product.category == "soins corporel" && <div className="bg-purple-500 px-4 w-max py-1 my-2 text-center text-[12px]  rounded-full bg-opacity-15 text-purple-500">{product.category}</div>}
                              {product.category == "hygiene" && <div className="bg-blue-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-blue-500">{product.category}</div>}
                              {product.category == "lotion" && <div className="bg-yellow-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-yellow-500">{product.category}</div>}
                              {product.category == "immunite" && <div className="bg-teal-500 px-4 w-max py-1 my-2 text-center rounded-full  text-[12px] bg-opacity-15 text-teal-500">{product.category}</div>}
                              {product.category == "nutrition" && <div className="bg-indigo-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-indigo-500">{product.category}</div>}
                              {product.category == "" && <div className="bg-red-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>}
                           </div>  
                           
               </div>

                    </Link> 
                  
                  </div>
                ))} 

      </Slider> 
    </div>
  );
}

export default SlideMe;











