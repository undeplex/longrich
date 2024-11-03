// components/FeaturedCarousel.js
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import productsData from '../data/products.json';

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProducts = productsData.filter(product => product.featured);
  const totalSlides = featuredProducts.length;
  const slideRef = useRef([]);

  // Auto-slide effect using interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 2000); // Change slide every 1 second

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, [currentIndex, totalSlides]);

  // Manual slide change with GSAP animations
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    animateSlides(currentIndex, nextIndex);
    setCurrentIndex(nextIndex);
  };

  const animateSlides = (fromIndex, toIndex) => {
    const fromSlide = slideRef.current[fromIndex];
    const toSlide = slideRef.current[toIndex];

    // Fade out the current slide
    gsap.to(fromSlide, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // On completion of fade out, set the current slide to hidden
        fromSlide.style.display = 'none';
      },
    });

    // Set the next slide to visible and animate
    gsap.fromTo(
      toSlide,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    // Set the next slide to block to make it visible for animation
    toSlide.style.display = 'block';
  };

  return (
    <div className="relative w-full overflow-hidden h-[390px] ">
      {/* Carousel Track */}
      <div className="flex">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            ref={el => slideRef.current[index] = el}
            className={`carousel-slide  w-full flex-shrink-0  text-center transition-all duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }} // Control visibility
          >
            <div className="md:w-[270px] w-[310px]  h-[220px] grid place-content-center mx-auto  mb-">

            <img
              src={product.image}
              alt={product.name}
              className="h- w-10/12 -full scale-90  mx-auto rounded-lg object-cover mb-4 transition-transform duration-500"
            />
            </div>
            <h3 className="text-2xl w-11/12 font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600 underline">{product.category.toUpperCase()}</p>
            <p>
           
   
            </p>
            <p className="text-sm text-gray-500 mt-2">{product.smallDescription}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;