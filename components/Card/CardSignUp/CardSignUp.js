import styles from './CardSignUp.module.css'
export default function CardSignUp(){
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
      <div className={styles.form}>
        {/* <p>Email</p> */}
        <label className={styles.label_input} htmlFor="email">Email</label>
        <input className={styles.input} type="email" name='email' placeholder='example@mail.com'/>
        <p className={styles.desc}>kami akan mengirim kode verifikasi ke email</p>
      </div>
      <button className={styles.btn_signup}>lanjutkan</button>
      <p className={styles.label_login}>Sudah memiliki akun? <button className={styles.btn_login}>masuk</button></p>
      <p className={styles.policy}>Dengan mendaftar, Anda menyetujui Ketentuan <span className={styles.syarat}>Penggunaan</span> dan <span className={styles.syarat}>Kebijakan Privasi </span>kami.</p>
    </div>
  )
}