'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { exploreImages } from '@/constant';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import { ExploreImg3, ExploreImg4, ExploreImg5, ExploreImg6, SliderGif, SliderImg1, SliderImg2, SliderImg4 } from '@/assets';

export default function servicecrousel({ hideText }) {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        centeredSlides={false}
        spaceBetween={30}


        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: false
           
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200:{
            slidesPerView: 4,
            spaceBetween: 25,
          }
        }}
        className="swiper-containers my-32 "
      >


        <SwiperSlide >
          <img className=' h-685 w-full' src={ExploreImg3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg4.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg5.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg6.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className=' h-685 w-full' src={ExploreImg3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg4.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg5.src} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img className='h-685 w-full' src={ExploreImg6.src} alt="" />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
