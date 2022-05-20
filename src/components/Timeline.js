import React from 'react';
import { EffectFlip, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DaftarTimeline } from './DaftarTimeline';

const TimelineWPC = () => {
    return(
    <Swiper
        style={{
          "--swiper-navigation-color": "#161616",
          "--swiper-pagination-color": "#161616",
      }}
          pagination={{
            clickable: true
        }}
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          }}}
        grabCursor={true}
        modules={[ EffectFlip, Navigation, Pagination]}
        className='mb-10 mySwiper'
    >
      {DaftarTimeline.map((item, index) => {
        return(
          <SwiperSlide>
            <div className={`relative w-full h-60 flex flex-col rounded-xl items-center ${(index % 2 === 0) ? 'bg-blue text-white' : 'bg-white text-black'}`}>
            <p className='absolute left-0 top-0 w-full p-4 font-light'>
              {item.date}
            </p>
            <h4 className='absolute right-0 bottom-0 w-full text-right p-4 font-semibold'>
              {item.title}
            </h4>
          </div>
          </SwiperSlide>

        )
      })}
    </Swiper>

    )
}
export default TimelineWPC;