import React from 'react';
import { useCallback, useRef } from "react";
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import Styles from './SwiperSlides.module.css';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperSlides({ section }) {

  const swiperRef = useRef();

  return (
    <div>
      <div className={Styles.navigation}>
        <MdNavigateBefore size={48} className={Styles.prev_arrow} onClick={() => swiperRef.current?.slidePrev()}>Prev</MdNavigateBefore>
        <MdNavigateNext size={48} className={Styles.next_arrow} onClick={() => swiperRef.current?.slideNext()}>Next</MdNavigateNext>
      </div>

      <Swiper
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img className={Styles.image} src="/banner.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner2.jpeg" />
        </SwiperSlide>

      </Swiper>



    </div>
  )
}

export default SwiperSlides
