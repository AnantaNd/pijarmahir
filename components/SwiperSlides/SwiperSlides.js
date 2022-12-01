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

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function SwiperSlides({ section }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      {
        section
        &&
        <div className={Styles.navigation}>
          <MdNavigateBefore size={48} className={Styles.prev_arrow} onClick={handlePrev}>pre</MdNavigateBefore>
          <MdNavigateNext size={48} className={Styles.next_arrow} onClick={handleNext}>next</MdNavigateNext>
        </div>
      }
      <Swiper
        effect={"flip"}
        grabCursor={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        loop={true}
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
