import { useState } from 'react'
import validator from 'validator'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CardSignUp.module.css'

export default function CardSignUp() {
  const [emailError, setEmailError] = useState('')

  const validate =(e)=>{
    var email = e.target.value
    console.log(email)
    if(validator.isEmail(email)){
      setEmailError(`Kami akan mengirim kode verifikasi ke ${email}`)
    }else{
      setEmailError('Format email yang dimasukkan tidak memiliki “@”')
    }
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
      <Input onChangeInput={(e)=>validate(e)} label="Email" name="email" type="email" placeholder="example@gmail.com" />
      <p className={styles.desc}>{emailError}</p>
      <Button buttonType="primary">Lanjutkan</Button>
      <p className={styles.label_login}>Sudah memiliki akun? <button className={styles.btn_login}>masuk</button></p>
      <p className={styles.policy}>Dengan mendaftar, Anda menyetujui Ketentuan <span className={styles.syarat}>Penggunaan</span> dan <span className={styles.syarat}>Kebijakan Privasi </span>kami.</p>
    </div >
  )
}