import React from 'react';
import { EffectFlip, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DaftarTestimoni } from './DaftarTestimoni';

const Testimonial = () => {
    return(
    <Swiper
        style={{
          "--swiper-navigation-color": "#024c68",
          "--swiper-pagination-color": "#024c68",
      }}
        autoHeight={true}
        spaceBetween={30}
        centeredSlides={true}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            navigation: false,
          },
          768: {
            navigation: true,
          },
          1024: {
            navigation: true,
          }}}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        modules={[ Autoplay, Pagination, EffectFlip, Navigation]}
        className='mb-10 mySwiper'
    >
      {DaftarTestimoni.map((item, index) => {
        if (index % 2 === 0){
          return(
            <SwiperSlide className='px-4 md:px-40'>
              <div className='bg-neutral-900 text-white flex flex-col md:flex-row rounded-xl items-center'>
                {item.photo}
                <div className='p-8 w-full md:w-4/5'>
                  {item.testimony}
                  <br/>
                  <h5>{item.name} - {item.jobTitle}</h5>
                  <h6>{item.eventTitle}</h6>
                </div>
              </div>
            </SwiperSlide>
          )
        } else {
          return(
            <SwiperSlide className='px-4 md:px-40'>
              <div className='bg-neutral-300 text-black flex flex-col md:flex-row rounded-xl items-center'>
                <div className='p-8 w-full md:w-4/5 order-2'>
                  {item.testimony}
                  <br/>
                  <h5>{item.name} - {item.jobTitle}</h5>
                  <h6>{item.eventTitle}</h6>
                </div>
                {item.photo}
              </div>
            </SwiperSlide>            
          )
        }
      })}
    </Swiper>

    )
}
export default Testimonial;