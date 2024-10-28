// components/TextSlider.js
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TextSlider = () => {
  const texts = ["Welcome to Longrich Store", "Discover Great Products", "Enjoy Amazing Deals","All Client support 24/7"];
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
    <div className="text-center text-3xl mx-auto  w-[260px]">
      <span ref={textRef}>{texts[currentTextIndex]}</span>
    </div>
  );
};

export default TextSlider;