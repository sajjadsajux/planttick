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
            {/* Background Image */}
            <img src="https://i.ibb.co/7dMdGFKP/slider4.jpg" className="h-[60vh] md:h-[70vh] lg:h-[85vh] w-full object-cover" alt="" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:space-y-16 space-y-5 container mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">Choose the Right Plant</h2>
              <p className="text-sm md:text-lg lg:text-2xl drop-shadow-md">Pick plants that match your space and lifestyle. Busy schedule? Go for low-maintenance options like snake plants or ZZ plants. Consider light, humidity, and your level of care before bringing a new plant home.</p>
              <h4 className="text-sm md:text-lg lg:text-2xl drop-shadow-md">
                <span className="font-bold">Extra Tip:</span> Research the plant’s growth size—some small starters can grow quite large over time.
              </h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            {/* Background Image */}
            <img src="https://i.ibb.co/9mF0mRqx/slider3.webp" className="h-[60vh] md:h-[70vh] lg:h-[85vh] w-full object-cover" alt="" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:space-y-16 space-y-5 container mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">Watering Wisely</h2>
              <p className="text-sm md:text-lg lg:text-2xl drop-shadow-md">Overwatering is a common mistake. Check soil moisture before watering—most plants prefer slightly dry soil between sessions. Use pots with drainage holes to prevent root rot.</p>
              <h4 className="text-sm md:text-lg lg:text-2xl drop-shadow-md">
                <span className="font-bold">Extra Tip:</span> Water early in the morning to reduce evaporation and prevent fungal issues.
              </h4>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            {/* Background Image */}
            <img src="https://i.ibb.co/G376Q8j4/slider1.png" className="h-[60vh] md:h-[70vh] lg:h-[85vh] w-full object-cover" alt="" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:space-y-16 space-y-5 container mx-auto">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 drop-shadow-lg">Boost Growth with Light</h2>
              <p className="text-sm md:text-lg lg:text-2xl drop-shadow-md">Different plants need different light levels. Place low-light plants like pothos in shade, while sun-lovers like lavender need 6+ hours of direct sunlight daily.</p>
              <h4 className="text-sm md:text-lg lg:text-2xl drop-shadow-md">
                <span className="font-bold">Extra Tip:</span> Rotate plants occasionally so all sides get even light and grow symmetrically.
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
