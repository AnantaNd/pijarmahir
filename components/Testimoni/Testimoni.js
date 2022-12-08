import React, { useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import CardTestimoni from '../Card/CardTestimoni/CardTestimoni';
import Styles from './Testimoni.module.css';

function Testimoni() {
  const swiperRef = useRef();


  return (
    <div className={Styles.testimoni_container}>
      <div className={Styles.header}>
        <h3 className={Styles.testimoni}>Testimoni Dari <br /> Pelajar</h3>
        <div className={Styles.navigation}>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slidePrev()}>
            <MdNavigateBefore size={24} className={Styles.prev_arrow} >Prev</MdNavigateBefore>
          </div>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slideNext()}>
            <MdNavigateNext size={24} className={Styles.next_arrow} >Next</MdNavigateNext>
          </div>
        </div>
      </div>
      <div className={Styles.testimoni_content}>
        <Swiper
          className={Styles.swiper_testimoni}
          slidesPerView={2}
          breakpoints={
            {
              1280: {
                slidesPerView: 2,
                width: 1000,
              },
              869: {
                slidesPerView: 1,
                width: 869
              },
              768: {
                slidesPerView: 1,
                width: 768
              },
              414: {
                slidesPerView: 1,
                width: 414
              },
              375: {
                slidesPerView: 1,
                width: 375
              },
            }
          }
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <CardTestimoni />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimoni />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimoni />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimoni />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimoni />
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  )
}

export default Testimoni
