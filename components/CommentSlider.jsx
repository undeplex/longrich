// components/CommentSlider.js
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import ReviewCard from './ReviewCard';

const CommentSlider = ({ reviews,index }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth / 2;
    } else {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth / 2;
    }
  };

  return (
    <div className="relative pt-8 pb-8 m w-ma mx-auto bg max-w-2xl bg-gray-00">
      <div
        ref={sliderRef}
        className="flex mx-auto lg:max-w-2xl relative overflow-x-scroll no-scrollbar hide-scrollbar scroll-smooth gap-4 px-4"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute md:grid hidden left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute md:grid hidden right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CommentSlider;