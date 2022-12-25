import styles from './Hero.module.css'

export default function Hero({title, tag, mitra, ulasan, people}){
  return (
    <>
      <div className={styles.container}>
        <p className={styles.tag}>{tag}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.mitra}>Oleh: <span>{mitra}</span></p>
        <div className={styles.container_rating}>
          <p className={styles.location}>pelatihan di: <span>{mitra}</span></p>
          <p className={styles.rating}>{ulasan} ulasan</p>
          <p className={styles.people}>{people} peserta</p>
        </div>
      </div>
    </>
  )
}