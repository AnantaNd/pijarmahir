import React, { useCallback, useRef } from 'react';
import Styles from './CategoryContainer.module.css';
import CardProduct from '../Card/CardProduct/CardProduct';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import Image from 'next/image';


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

function CategoryContainer({ backgroundUrl, category, harga, img, rating, title }) {
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
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 className={Styles.title}>Kartu Prakerja</h3>
        <div className={Styles.navigation}>
          <MdNavigateBefore size={48} className={Styles.prev_arrow} onClick={handlePrev}>pre</MdNavigateBefore>
          <MdNavigateNext size={48} className={Styles.next_arrow} onClick={handleNext}>next</MdNavigateNext>
        </div>
      </div>
      <div className={Styles.container_collection}>
        <div className={Styles.background_collection} style={{ backgroundImage: `url('/background-collection-prakerja.jpg')` }} >
          <Image src="/PRAKERJA_WHITE.svg" width={150} height={50} />
          <p className={Styles.text}>Tingkatkan keahlian mu dan siap kerja dengan Kartu Prakerja!</p>
          <button className={Styles.btnMore_collection}>Lihat Semua</button>
        </div>
        <Swiper
          className={Styles.collections}
          slidesPerView={4}
          spaceBetween={"-100"}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct category harga img rating title />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CategoryContainer
