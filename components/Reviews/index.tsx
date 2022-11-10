import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ReviewItem from "./ReviewItem";

export default function Reviews() {
  return (
    <div className="mx-auto max-w-screen-lg px-4 mb-8">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="review-swiper bg-[#F5F9FF] p-4"
      >
        <SwiperSlide className="p-4">
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <ReviewItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
