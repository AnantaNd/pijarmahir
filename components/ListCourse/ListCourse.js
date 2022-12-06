import { AiFillStar } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import styles from './ListCourse.module.css'


export default function ListCourse ({img, title, mitra, rating, ulasan, price}){
  return(
    <div className={styles.container}>
      <div className={styles.container_img}>
        <div className={styles.card_img} style={{ backgroundImage: "url(" + img + ")" }}>
            <FaRegHeart size={30} className={styles.fav_icon}/>
          </div>
      </div>
      <div className={styles.container_content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.mitra}>{mitra}</p>
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
  )
}
