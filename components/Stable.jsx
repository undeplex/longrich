import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

export default function Stable({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Split the text into words/lines/characters
    const typeSplit = new SplitType(textRef.current, {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    // GSAP animation
    gsap.from(typeSplit.words, {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
        // scrub: tru,
        toggleActions: 'play reverse play reverse'
      },
    });

    // Cleanup to avoid memory leaks
    return () => {
      // ScrollTrigger.getAll().forEach((instance)=>instance.kill()); // Kills all ScrollTriggers
      typeSplit.revert(); // Reverts the SplitType instance
    };
  }, []);

  return (
    <div ref={textRef} animate="true">
      {children}
    </div>
  );
}
