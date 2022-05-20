import React from 'react';
import { EffectFlip, Navigation, Pagination, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/lazy";
import DaftarGaleri from './DaftarGaleri';

const Galeri = () => {
    return(
    <Swiper
        style={{
            "--swiper-navigation-color": "#f4f4f4",
            "--swiper-pagination-color": "#f4f4f4",
        }}
        centeredSlides={true}
        slidesPerView={1}
        lazy={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }}}
        grabCursor={true}
        modules={[ Lazy, EffectFlip, Navigation, Pagination, Autoplay]}
        className='mb-10 mySwiper'
    >
      {DaftarGaleri.map((item, index) => {
        return(
          <SwiperSlide>
            {item.photo}
          </SwiperSlide>

        )
      })}
    </Swiper>

    )
}
export default Galeri;