import { AiFillStar } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import styles from './CardCourse.module.css'

export default function CardCourse({course, img, subtitle,rating, price, ulasan}){
  return(
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_img} style={{ backgroundImage: `url(${img})`}}>
            <FaRegHeart size={30} className={styles.fav_icon}/>
          </div>
          <p className={styles.course}>{course}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.rating}>
            <AiFillStar size={16} color='rgb(255, 138, 43)'  />
            <AiFillStar size={16} color='rgb(255, 138, 43)'  />
            <AiFillStar size={16} color='rgb(255, 138, 43)'  />
            <AiFillStar size={16} color='rgb(255, 138, 43)'  />
            <AiFillStar size={16} color='rgb(255, 138, 43)'  /> &nbsp;
            <span className={styles.rating_review}>{rating} &nbsp; ({ulasan} ulasan)</span>
          </p>
          <p className={styles.price}>Rp. {price}</p>
        </div>
      </div>
    </>
  )
}