import styles from './Hero.module.css'

export default function Hero(){
  return (
    <>
      <div className={styles.container}>
        <p className={styles.tag}>Pembelajaran Mandiri</p>
        <h1 className={styles.title}>Belajar Teknik Pembuatan Surat, Dokumen dan Presentasi, Pengolahan Data Bisnis serta Visualisasi Grafis dengan Microsoft Office untuk Tenaga Perkantoran Umum Administrasi Perkantoran</h1>
        <p className={styles.mitra}>Oleh: <span>CourseNet-</span></p>
        <div className={styles.container_rating}>
          <p className={styles.location}>pelatihan di: <span>CourseNet-</span></p>
          <p className={styles.rating}>12 ulasan</p>
          <p className={styles.people}>129 peserta</p>
        </div>
        {/* <div className={styles.container_btn}>
          <Button buttonType='primary'>beli sekarang</Button>
        </div> */}
      </div>
    </>
  )
}