import React, { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import CardProduct from '../Card/CardProduct/CardProduct';
import Styles from './KartuPrakerja.module.css';

import Image from 'next/image';


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Link from 'next/link';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function KartuPrakerja({ dataCard }) {
  const swiperRef = useRef();

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
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slidePrev()}>
            <MdNavigateBefore size={24} className={Styles.prev_arrow} >Prev</MdNavigateBefore>
          </div>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slideNext()}>
            <MdNavigateNext size={24} className={Styles.next_arrow} >Next</MdNavigateNext>
          </div>
        </div>
      </div>
      <div className={Styles.container_collection}>
        <div className={Styles.background_collection} style={{ backgroundImage: `url('/background-collection-prakerja.jpg')` }} >
          <Image src="/PRAKERJA_WHITE.svg" width={150} height={50} alt='img'/>
          <p className={Styles.text}>Tingkatkan keahlian mu dan siap kerja dengan Kartu Prakerja!</p>
          <Link href={'/kursus'}><button className={Styles.btnMore_collection}>Lihat Semua</button></Link>
        </div>
        <Swiper
          className={Styles.collections}
          breakpoints={
            {
              1280: {
                slidesPerView: 4,
                width: 1280,
              },
              834: {
                slidesPerView: 3,
                width: 834
              },
              768: {
                slidesPerView: 2,
                width: 700
              },
              414: {
                slidesPerView: 1,
                width: 400,
              },
              390: {
                slidesPerView: 1,
                width: 350,
              },
              320: {
                slidesPerView: 1,
                width: 330,
              },
            }
          }
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataCard.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <CardProduct category={data.teacher} harga={data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} img={data.thumbnail} rating={data.rating} title={data.fullname} ulasan={data.totalRater} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default KartuPrakerja
