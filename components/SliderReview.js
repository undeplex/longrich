import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderReview = ({ reviews }) => {
  return (
    <div className="review-slider px-3  rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="mx bg-slate-200- pb-5">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons
      <div className="swiper-button-next">
        <FaArrowRight className="text-xl" />ewhj
      </div>
      <div className="swiper-button-prev">
        <FaArrowLeft className="text-xl" />epow
      </div> */}
    </div>
  );
};
export default SliderReview;