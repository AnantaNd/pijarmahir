import React, { useRef } from 'react';
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

function CourseContainer({ title, dataCard }) {
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
          {dataCard?.map((data, idx)=>{
            return (
              <SwiperSlide key={idx}>
                <CardCourse
                  course={data.fullname}
                  subtitle={data.teacher}
                  rating={data.rating}
                  ulasan={data.totalRater}
                  price={data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  img={'mahirprakerja.jpg'}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default CourseContainer
