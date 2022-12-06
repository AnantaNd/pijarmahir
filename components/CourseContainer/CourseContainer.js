import React, { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import CardCourse from '../Card/CardCourse/CardCourse';
import Styles from './CourseContainer.module.css';



// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CourseContainer({ title }) {
  const swiperRef = useRef();

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 className={Styles.title}>{title}</h3>
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
          <SwiperSlide className={Styles.content}>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
          <SwiperSlide className={Styles.content}>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
          <SwiperSlide className={Styles.content}>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
          <SwiperSlide className={Styles.content}>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
          <SwiperSlide>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
          <SwiperSlide className={Styles.content}>
            <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} ulasan={12} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CourseContainer
