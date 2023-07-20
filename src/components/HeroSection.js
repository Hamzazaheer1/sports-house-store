import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/assets/hero1.jpg"
            className="w-full h-[70vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero2.jpg"
            className="w-full h-[70vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero3.jpg"
            className="w-full h-[70vh] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/hero4.jpg"
            className="w-full h-[70vh] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
