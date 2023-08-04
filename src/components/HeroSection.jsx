import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function HeroSection() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/assets/hero1.jpg"
            className="w-full h-[70vh] object-cover"
            alt="hero1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero2.jpg"
            className="w-full h-[70vh] object-cover"
            alt="hero2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero3.jpg"
            className="w-full h-[70vh] object-cover"
            alt="hero3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero4.jpg"
            className="w-full h-[70vh] object-cover"
            alt="hero4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
