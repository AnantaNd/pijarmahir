import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import validator from 'validator'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CardSignUp.module.css'


export default function CardSignUp() {
  const [emailError, setEmailError] = useState('')

  const validate = (e) => {
    var email = e.target.value
    console.log(email)
    if (validator.isEmail(email)) {
      setEmailError(`Kami akan mengirim kode verifikasi ke ${email}`)
    } else {
      setEmailError('Format email yang dimasukkan tidak memiliki “@”')
    }
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
      <Input onChangeInput={(e) => validate(e)} label="Email" name="email" type="email" placeholder="example@gmail.com" />
      <p className={styles.desc}>{emailError}</p>
      <Button buttonType="primary">Lanjutkan</Button>
      <div className={styles.sparator}>
        <div className={styles.hl}></div>
        atau
        <div className={styles.hl}></div>
      </div>
      <div className={styles.alt}>
        <Button btnOnClick={()=>signIn('google')}>
          <FcGoogle size={24} style={{ marginRight: "8px" }} />Daftar dengan Google
        </Button>
        <Button btnOnClick={()=>signIn('facebook')}>
          <FaFacebook color="DodgerBlue" size={24} style={{ marginRight: "8px" }} />Daftar dengan Facebook
        </Button>
      </div>
      <p className={styles.label_login}>Sudah memiliki akun? <Link href="/auth/login" style={{ textDecoration: "none" }} ><span className={styles.btn_login}>Masuk</span></Link></p>
      <p className={styles.policy}>Dengan mendaftar, Anda menyetujui Ketentuan <span className={styles.syarat}>Penggunaan</span> dan <span className={styles.syarat}>Kebijakan Privasi </span>kami.</p>
    </div >
  )
}