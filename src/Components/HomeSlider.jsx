import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HomeSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/XrtvGJFs/slider-Nouka.jpg" className="lg:h-[85vh] md:h-[70vh] w-full" alt="" />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">Welcome to the Event</h2>
              <p className="text-base md:text-lg lg:text-xl">Join us for unforgettable moments</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/Q7zkkwmH/conf.jpg" alt="" className="lg:h-[85vh] md:h-[70vh] w-full" />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">Welcome to the Event</h2>
              <p className="text-base md:text-lg lg:text-xl">Join us for unforgettable moments</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/TqTcXbSc/fanush.jpg" alt="" className="lg:h-[85vh] md:h-[70vh] w-full" />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2">Welcome to the Event</h2>
              <p className="text-base md:text-lg lg:text-xl">Join us for unforgettable moments</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
