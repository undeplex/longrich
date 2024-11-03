// components/TextSlider.js
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TextSlider = () => {
  const texts = ["Obtenez des reductions", "Commander facilement", "S'informer des produits","Gagner facilement"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide up and fade out animation
      gsap.to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.3, // Faster fade-out and slide-up
        ease: "power2.in",
        onComplete: () => {
          // Change the text after fade-out animation completes
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          // Reset position and fade in with slide down
          gsap.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" } // Faster fade-in and slide-down
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="text-center text-slate-700 h-[85px] mb-8 text-4xl font-bold mx-auto  max-w-[460px]">
      Chez LongrichStore <span ref={textRef}>{texts[currentTextIndex]}</span>
    </div>
  );
};

export default TextSlider;