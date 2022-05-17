import React from 'react';
import { EffectFlip, Pagination, Autoplay } from "swiper";
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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        modules={[ Autoplay, Pagination, EffectFlip]}
        className='mb-10 mySwiper'
    >
      {DaftarTestimoni.map((item, index) => {
        if (index % 2 == 0){
          return(
            <SwiperSlide className='px-4 md:px-10'>
              <div className='bg-neutral-900 text-white flex flex-col md:flex-row rounded-xl items-center'>
                {item.photo}
                <div className='p-8 w-full md:w-3/4'>
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
            <SwiperSlide className='px-4 md:px-10'>
              <div className='bg-neutral-300 text-black flex flex-col md:flex-row rounded-xl items-center'>
                <div className='p-8 w-full md:w-3/4 order-2'>
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
      {/* <SwiperSlide className='p-12'>
        <div className='bg-neutral-900 text-white flex flex-col md:flex-row rounded-xl items-center'>
          <StaticImage
              src='../images/speaker1.webp'
              alt="David Christian"
              className='w-full md:w-1/4 '
          />
          <div className='p-8 w-full md:w-3/4'>
            <p>
                "The event is fascinating to <b className='text-lg'>raise youth awareness and responsibility for environmental issues</b>. We’re pleased to provide and share our eco-friendly straw with Industrial Workshop UGM and help educate SMEs to reduce single-use plastic straws. We hope to collaborate again in the future."
            </p>
            <br/>
            <h5>David Christian - Founder and CEO of Evo&Co</h5>
            <h6>IW 2020’s speaker</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='p-12'>
        <div className='bg-neutral-300 text-black flex flex-col md:flex-row rounded-xl items-center'>
          <div className='p-8 w-full md:w-3/4 order-2'>
            <p>
              "IW 2021 <b className='text-lg'>was an excellent experience</b> for my team and me. It was such a roller coaster for us since it was held online, and we couldn't face each other how we were supposed to. Nevertheless, the event sequence and webinar are interesting to hear and attend. The insightful information that we dig from the study case and <b className='text-lg'>the beauty of the expert's feedback helps us understand</b> how much we are still far from perfect and triggers us to keep developing. Thank you, IW, for the unforgettable experience! <b className='text-lg'>10/10 for IW UGM!</b>"</p>
            <br/>
            <h5>Jessica - Happy Team</h5>
            <h6>Winner WPC IW 2021</h6>
          </div>
          <StaticImage
              src='../images/wpc1.webp'
              alt="Jessica"
              className='w-full md:w-1/4 order-1 md:order-3'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className='p-12'>
        <div className='bg-neutral-900 text-white flex flex-col md:flex-row rounded-xl items-center'>
          <StaticImage
              src='../images/speaker2.webp'
              alt="Ryan Maurice Tallulah"
              className='w-full md:w-1/4 '
          />
          <div className='p-8 w-full md:w-3/4'>
            <p>
              “Industrial Workshop UGM, prepares students to work together with teams, think critically and <b className='text-lg'>open their eyes to see real case studies in the real business world.</b> I am very happy to see this kind of event and recommend that students participate and play an active role in this Industrial Workshop.”
            </p>
            <br/>
            <h5>Ryan Maurice Tallulah - Formerly CEO now CAVO BARDI smarthome</h5>
            <h6>IW 2021’s speaker</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='p-12'>
        <div className='bg-neutral-300 text-black flex flex-col md:flex-row rounded-xl items-center'>
          <div className='p-8 w-full md:w-3/4 order-2'>
            <p>
              "IW 2021 <b className='text-lg'>was an excellent experience</b> for my team and me. It was such a roller coaster for us since it was held online, and we couldn't face each other how we were supposed to. Nevertheless, the event sequence and webinar are interesting to hear and attend. The insightful information that we dig from the study case and <b className='text-lg'>the beauty of the expert's feedback helps us understand</b> how much we are still far from perfect and triggers us to keep developing. Thank you, IW, for the unforgettable experience! <b className='text-lg'>10/10 for IW UGM!</b>"</p>
            <br/>
            <h5>Jessica - Happy Team</h5>
            <h6>Winner WPC IW 2021</h6>
          </div>
          <StaticImage
              src='../images/wpc1.webp'
              alt="Jessica"
              className='w-full md:w-1/4 order-1 md:order-3'
          />
        </div>
      </SwiperSlide> */}
    </Swiper>

    )
}
export default Testimonial;