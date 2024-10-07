import React from "react";
import Slider from "react-slick";
import SingleStuff from "./SingleStuff";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
function Responsive() {
  var settings = {
    dots: true,
    infinite: true,autoplay: true,   autoplaySpeed: 2000,
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
          slidesToScroll: 1,autoplay: true,   autoplaySpeed: 2000,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,autoplay: true,   autoplaySpeed: 2000,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,autoplay: true,   autoplaySpeed: 2000,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container p-2 mb-5">
      <Slider {...settings}>
      <SingleStuff last={<div className="bg-gradient-to-bl from-yellow-500 to-indigo-700 size-7 rounded-full my-2"></div>} first={<div className="text-xl"> Votre immunité  </div>} second="Rendre votre systeme immunitaire plus resistant"/>
      <SingleStuff last={<div className="bg-gradient-to-bl from-orange-500 to-indigo-700 size-7 rounded-full my-2"></div>} first={<div className="text-xl">Votre soins corporel</div>} second="Avec une large gamme de produit cosmetique "/>
      <SingleStuff last={<div className="bg-gradient-to-bl from-green-500 to-indigo-700 size-7 rounded-full my-2"></div>} first={<div className="text-xl">Sante & Nutritifs </div>} second="Des produits a la fois succulants et soignant"/>
      <SingleStuff last={<div className="bg-gradient-to-bl from-gray-500 to-indigo-700 size-7 rounded-full my-2"></div>} first={<div className="text-xl">Divers </div>} second="Du testeur de pH, a la bouteille d'eau alcalin et ..."/>
      </Slider> 
     
    </div>
  );
}

export default Responsive;









