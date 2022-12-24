import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CardSignUp.module.css'


export default function CardSignUp() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorUserName, setErrorUserName] = useState('')
  const [errorConfmPass, setErrorConfmPass] = useState('')
  const router = useRouter();

  const onSubmit = async () => {
    await fetch('http://localhost:9000/api/v1/user/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": email,
        "password": pass,
        "email": email,
        "no_tlp": "081244326633",
        "birthdate": "1976-06-16",
        "gender": "pria"
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push('/')
      });
  };


  function handleInputEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value)
  }
  function handleInputUsername(e) {
    setUsername(e.target.value);
  }
  const handleInputPass = (e) => {
    setPass(e.target.value)
  }
  const handleInputConfirm = (e) => {
    setConfirmPass(e.target.value)
  }
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
  const handleSignup = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrorUserName('isi terlebih dahulu username')
    } else {
      setErrorUserName('')
    }

    if (email === '') {
      setErrorEmail('isi terlebih dahulu email')
    } else if (!email.includes('@')) {
      setErrorEmail('eamil harus memiliki karakter @')
    } else if (!email.includes('gmail.com')) {
      setErrorEmail('email tidak valid')
    } else {
      setErrorEmail('')
    }

    if (pass === '') {
      setErrorPass('isi password terlebih dahulu')
    } else if (pass.length < 4) {
      setErrorPass('password harus memiliki minimal 4 karakter')
    } else {
      setErrorPass('')
    }

    if (confirmPass === '') {
      setErrorConfmPass('masukkan kembali password')
    } else if (confirmPass != pass) {
      setErrorConfmPass('password harus sama')
    } else {
      setErrorConfmPass('')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>daftar</h1>
      <p className={styles.subtitle}>bangun karirmu bersama pijar mahir</p>
      <form className={styles.container_input}>
        {/* <Input
            label={'username'}
            name={'username'}
            type={'text'}
            placeholder={'username'}
            // helper={errorEmail}
            // onChangeInput={handleInputEmail}
          /> */}
        <Input
          label={'email'}
          name={'email'}
          type={'text'}
          placeholder={'example@gmail.com'}
          helper={errorEmail}
          onChangeInput={handleInputEmail}
        />
        <Input
          label={'password'}
          name={'password'}
          type={'password'}
          placeholder={'password'}
          helper={errorPass}
          onChangeInput={handleInputPass}
        />
        <Input
          label={'confirm password'}
          name={'confirm password'}
          type={'password'}
          placeholder={'password'}
          helper={errorConfmPass}
          onChangeInput={handleInputConfirm}
        />
      </form>
      {/* <p className={styles.desc}>{emailError}</p> */}
      {/* <Button buttonType="primary" btnOnClick={handleSignup}>Lanjutkan</Button> */}
      <Button buttonType="primary" btnOnClick={onSubmit}>Lanjutkan</Button>
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