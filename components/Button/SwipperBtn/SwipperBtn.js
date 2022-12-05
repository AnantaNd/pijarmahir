import { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styles from './SwipperBtn.module.css';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";


export default function SwiperBtn({ children }) {
  const slideRef = useRef(null)

  const btnPrev = useCallback(() => {
    console.log('click')
    if (!slideRef.curent) return;
    slideRef.current.swiper.slidePrev()

  }, [])

  const btnNext = useCallback(() => {
    console.log('click')
    if (!slideRef.curent) return;
    slideRef.current.swiper.slideNext()

  }, [])

  return (
    <div>
      <div className={styles.containerSwiper}>
        <MdNavigateBefore className={styles.btnSwiper} onClick={btnPrev} size={30}>prev</MdNavigateBefore>
        <MdNavigateNext className={styles.btnSwiper} onClick={btnNext} size={30}>next</MdNavigateNext>
      </div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        Pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          {children}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}