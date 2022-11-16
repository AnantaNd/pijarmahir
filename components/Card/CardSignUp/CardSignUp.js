import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CardSignUp.module.css'
export default function CardSignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
      <Input label="Email" name="email" type="email" placeholder="example@g,ail.com" />
      <Button buttonType="primary">Lanjutkan</Button>
      <p className={styles.label_login}>Sudah memiliki akun? <button className={styles.btn_login}>masuk</button></p>
      <p className={styles.policy}>Dengan mendaftar, Anda menyetujui Ketentuan <span className={styles.syarat}>Penggunaan</span> dan <span className={styles.syarat}>Kebijakan Privasi </span>kami.</p>
    </div >
  )
}