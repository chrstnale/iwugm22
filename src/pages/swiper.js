// Import Swiper React components
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperPage = () => {
    return(
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        loop = {true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide className='bg-red'>
          <h1>Jessica - Happy Team - Winner WPC IW 2021</h1>
          <p>IW 2021 was an excellent experience for my team and me. It was such a roller coaster for us since it was held online, and we couldn't face each other how we were supposed to. Nevertheless, the event sequence and webinar are interesting to hear and attend. The insightful information that we dig from the study case and the beauty of the expert's feedback helps us understand how much we are still far from perfect and triggers us to keep developing. Thank you, IW, for the unforgettable experience! 10/10 for IW UGM!</p>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>

    )
}
export default SwiperPage