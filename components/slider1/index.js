import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import dataSlider from './slider.json';
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="slider h-100 md:h-100 w-100 my-auto"
    >
      {dataSlider.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img src={slide.gambar} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
