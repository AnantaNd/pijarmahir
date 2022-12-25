import styles from './Hero.module.css'

export default function Hero({title, tag, mitra, ulasan}){
  return (
    <>
      <div className={styles.container}>
        <p className={styles.tag}>{tag}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.mitra}>Oleh: <span>{mitra}</span></p>
        <div className={styles.container_rating}>
          <p className={styles.location}>pelatihan di: <span>{mitra}</span></p>
          <p className={styles.rating}>{ulasan} ulasan</p>
          {/* <p className={styles.people}>129 peserta</p> */}
        </div>
        {/* <div className={styles.container_btn}>
          <Button buttonType='primary'>beli sekarang</Button>
        </div> */}
      </div>
    </>
  )
}