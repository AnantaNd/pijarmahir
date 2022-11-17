import Button from '../../Button/Button'
import styles from './CardVerify.module.css'

export default function CardVerify(){
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>masukan kode verifikasi</h1>
        <p className={styles.subtitle}>kode verifikasi telah dikirim ke email</p>
        <div className={styles.input_container}>
          <input className={styles.input_verify}/>
          <input className={styles.input_verify}/>
          <input className={styles.input_verify}/>
          <input className={styles.input_verify}/>
        </div>
        <Button buttonType="primary">Verifikasi</Button>
        <p className={styles.subtitle}>Tidak menerima kode? <span>Kirim Ulang</span></p>

      </div>
    </div>
  )
}