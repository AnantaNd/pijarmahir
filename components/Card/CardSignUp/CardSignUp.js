import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../Button/Button'
import styles from './CardSignUp.module.css'


export default function CardSignUp({inputEmail, inputPass, inputConfirm, helperE, helperP, helperC, handleSignUp, registerE, registerP, registerC}) {

  // const validate = (e) => {
  //   var email = e.target.value
  //   console.log(email)
  //   if (validator.isEmail(email)) {
  //     setEmailError(`Kami akan mengirim kode verifikasi ke ${email}`)
  //   } else {
  //     setEmailError('Format email yang dimasukkan tidak memiliki “@”')
  //   }
  // }

  const handleLoginFacebook = (e) => {
    e.preventDefault();
    signIn('facebook', {
      callbackUrl: '/newprofile'
    });
  }

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    signIn('google', {
      callbackUrl: '/newprofile'
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
        <div className={styles.container_input}>
          <label className={styles.label_input} htmlFor='email'>Email</label>
          <input className={styles.input} name='email' type='email' placeholder='example@mail.com' onChange={inputEmail} {...registerE}/>
          <small className={styles.helper_account}>{helperE}</small>
          <label className={styles.label_input} htmlFor='pass'>Password</label>
          <input className={styles.input} name='pass' type='password' placeholder='password' onChange={inputPass} {...registerP}/>
          <small className={styles.helper_account}>{helperP}</small>
          <label className={styles.label_input} htmlFor='pass'>Confirm Password</label>
          <input className={styles.input} name='pass' type='password' placeholder='password' onChange={inputConfirm} {...registerC}/>
          <small className={styles.helper_account}>{helperC}</small>
        </div>
      {/* <Input onChangeInput={(e) => validate(e)} label="Email" name="email" type="email" placeholder="example@gmail.com" /> */}
      {/* <p className={styles.desc}>{emailError}</p> */}
      <Button buttonType="primary">Lanjutkan</Button>
      <div className={styles.sparator}>
        <div className={styles.hl}></div>
        atau
        <div className={styles.hl}></div>
      </div>
      <div className={styles.alt}>
        <Button btnOnClick={handleLoginGoogle}>
          <FcGoogle size={24} style={{ marginRight: "8px" }} />Daftar dengan Google
        </Button>
        <Button btnOnClick={handleLoginFacebook}>
          <FaFacebook color="DodgerBlue" size={24} style={{ marginRight: "8px" }} />Daftar dengan Facebook
        </Button>
      </div>
      <p className={styles.label_login}>Sudah memiliki akun? <Link href="/auth/login" style={{ textDecoration: "none" }} ><span className={styles.btn_login}>Masuk</span></Link></p>
      <p className={styles.policy}>Dengan mendaftar, Anda menyetujui Ketentuan <span className={styles.syarat}>Penggunaan</span> dan <span className={styles.syarat}>Kebijakan Privasi </span>kami.</p>
    </div >
  )
}