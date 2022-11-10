import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="mx-auto max-w-7xl p-4 md:px-6 ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-fit "
        style={
          {
            "--swiper-navigation-color": "#ffff",
            "--swiper-pagination-color": "#ffff",
          } as React.CSSProperties
        }
      >
        <SwiperSlide>
          <Image
            src="/carousel/carousel-1.jpg"
            alt="1"
            width="1366"
            height="500"
            className="object-cover object-right max-h-32"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/carousel-2.jpg"
            alt="2"
            width="1366"
            height="500"
            className="object-cover object-right max-h-32"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/carousel/carousel-3.jpg"
            alt="3"
            width="1366"
            height="500"
            className="object-cover object-right max-h-32"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
