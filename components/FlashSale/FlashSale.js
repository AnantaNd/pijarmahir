import React, { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import CardProduct from '../Card/CardProduct/CardProduct';
import Countdown from '../Countdown/Countdown';
import Styles from './FlashSale.module.css';



// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FlashSale({ dataCard }) {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const discount =(price, percent)=>{
    const temp = price * (0.01*percent)
    return price - temp
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <br/>
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
        <div className={Styles.background_collection} >
          <h1 className={Styles.FlashSale}>Flash Sale</h1>
          <p className={Styles.text}>Berakhir dalam</p>
          <Countdown/>
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
                <CardProduct 
                  category={data.teacher}
                  harga={data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  img={'mahirprakerja.jpg'} rating={data.rating}
                  title={data.fullname}
                  ulasan={data.totalRater}
                  totalDiskon={discount(data.price, data.percentage).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  diskon={data.percentage} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}