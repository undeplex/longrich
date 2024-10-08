import { useRef } from 'react';

const StickySlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-[25px] flex justify-center items-center">
      {/* Left fade effect */}
      <div className="absolute left-0 h-full w-12 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none"></div>

      {/* Right fade effect */}
      <div className="absolute right-0 h-full w-12 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none"></div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory scroll-smooth"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
        }}
      >
        {/* Slider Items */}
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="min-w-[140px] h-[22px] bg- flex items-center bg-transparent py-4 border border-black justify-center rounded-full text-sm snap-center"
          >
            Option {i + 1}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 p-2 bg-gray-300 rounded-full shadow-md"
      >
        &#9664;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 p-2 bg-gray-300 rounded-full shadow-md"
      >
        &#9654;
      </button>
    </div>
  );
};

export default StickySlider;