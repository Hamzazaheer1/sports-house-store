import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

function TodaysDeals() {
  return (
    <div className="my-20 max-w-[1360px] mx-auto px-10">
      <h2 className="text-text-color text-3xl mb-10 mt-5">
        Todays Best Deals For You!
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero1" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero2" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero3" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero4" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero5" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero6" />
        </SwiperSlide>
        <SwiperSlide>
          Slide 1
          <img src="/assets/hero1.jpg" alt="hero7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TodaysDeals;
