import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const textBlocks = [
  {
    header: "Bright skin",
    subHeader: "Super cool than you think",
    paragraph: "We've been providing some top-notch product that give to your skin "
  },
  {
    header: "White Teeth",
    subHeader: "As much as possible",
    paragraph: "Using our white tea toothpaste you'll get rapidly a lightfull smile"
  },
  {
    header: "Spotless Face",
    subHeader: "All you need right",
    paragraph: "The charcoal soap on top of the sod lotion are going to crash all the pimple"
  },
  {
    header: "Potable water",
    subHeader: "You can make it by your own",
    paragraph: "We provide a saving-life water box that would let you cleanse your own water "
  }
];

const TextSwitcher = () => {
  const currentTextIndex = useRef(0);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const changeText = () => {
      const nextIndex = (currentTextIndex.current + 1) % textBlocks.length;
      const tl = gsap.timeline();

      // Fade out
      tl.to([headerRef.current, subHeaderRef.current, paragraphRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          // Change content
          headerRef.current.innerHTML = textBlocks[nextIndex].header;
          subHeaderRef.current.innerHTML = textBlocks[nextIndex].subHeader;
          paragraphRef.current.innerHTML = textBlocks[nextIndex].paragraph;
          currentTextIndex.current = nextIndex;
        }
      });

      // Fade in
      tl.to([headerRef.current, subHeaderRef.current, paragraphRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    };

    // Change the text every 3 seconds
    const interval = setInterval(changeText, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-switcher-container relative h-[50vh] bg-red-500 flex">
    
      <div className="bg-black absolute grid place-content-center  inset-0 bg-opacity-30">
          <div className="text-content ">
            By Longrich Caleb
            <h1 className="play" ref={headerRef}>{textBlocks[0].header}</h1>
            <h3 className="play" ref={subHeaderRef}>{textBlocks[0].subHeader}</h3>
            <p className="px-2" ref={paragraphRef}>{textBlocks[0].paragraph}</p>
          </div>
          
      </div>

      <style jsx>{`
        .text-switcher-container {
          
          justify-content: center;
          align-items: center;
       
          background: url('plause6.jpg') no-repeat center center;
          background-size: cover;
          background-position:center;
        }

        .text-content {
          text-align: center;
          color: white;
        }

        h1 {
          font-size: 3rem;
          margin: 0;
        }

        h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        p {
          font-size: 1.2rem;
          margin-top: 10px;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default TextSwitcher;
