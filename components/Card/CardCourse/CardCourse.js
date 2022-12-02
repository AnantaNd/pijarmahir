import styles from './CardCourse.module.css'

export default function CardCourse({course, img, subtitle,rating, price}){
  return(
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <img className={styles.img} src={img}/>
          {/* <MdFavorite size={30}></MdFavorite> */}
          <p className={styles.course}>{course}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.rating}>{rating}</p>
          <p className={styles.price}>Rp. {price}</p>
        </div>
      </div>
    </>
  )
}