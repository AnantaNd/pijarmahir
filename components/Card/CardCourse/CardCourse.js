import { AiFillStar } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import styles from './CardCourse.module.css'

export default function CardCourse({course, img, subtitle,rating, price}){
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
            <AiFillStar color='rgb(255, 138, 43)'  />
            <AiFillStar color='rgb(255, 138, 43)'  />
            <AiFillStar color='rgb(255, 138, 43)'  />
            <AiFillStar color='rgb(255, 138, 43)'  />
            <AiFillStar color='rgb(255, 138, 43)'  /> &nbsp;
            {rating}
          </p>
          <p className={styles.price}>Rp. {price}</p>
        </div>
      </div>
    </>
  )
}