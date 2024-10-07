import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const textBlocks = [
  {
    header: "Bright skin",
    subHeader: "Super cool than you think",
    paragraph: "We've been providing some top-notch product that give to your skin what it needss"
  },
  {
    header: "Header 2",
    subHeader: "Subheader 2",
    paragraph: "This is the second paragraph, describing block 2. for whatever it is want there"
  },
  {
    header: "Header 3",
    subHeader: "Subheader 3",
    paragraph: "This is the third paragraph, describing block 3. for whatever it is want there"
  },
  {
    header: "Header 4",
    subHeader: "Subheader 4",
    paragraph: "This is the fourth paragraph, describing block 4. for whatever it is want there"
  }
];

const TextSwitcherClone = () => {
  

  return (
    <div className="text-switcher-container relative h-[50vh] bg-red-500 flex">
    
      <div className="bg-black text-center absolute grid place-content-center  inset-0 bg-opacity-30">
        <div className="text-white">LONGRICH SPECIAL</div>
          <div className="play text-white text-5xl">
                Black skin
          </div>
          <div className="md:text-xl my-3 mx-auto w-10/12 text-gray-100"> 
                Nous proposons  plusieurs Lotions adaptées aux peau noir
          </div>
          <Link href="/product">
            <div className="bg-white md:text-lg text-gray-600 rounded-full w-[300px] mx-auto  block text-blak px-3 py-3">
              Shop now
              <ShoppingBagIcon className="inline size-6"/>
            </div>
          </Link>
      </div>

      <style jsx>{`
        .text-switcher-container {
          
          justify-content: center;
          align-items: center;
       
          background: url('pexels-arishojaei-27872945.jpg') no-repeat center center;
          background-size: cover;
          background-position:top;
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

export default TextSwitcherClone;
