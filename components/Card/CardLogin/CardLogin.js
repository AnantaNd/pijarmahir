import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Styles from "./CardLogin.module.css";

function CardLogin() {
  // const { data: session } = useSession();
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errorPass, setErrorPass] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  // console.log(users)
  const router = useRouter()

  const handleInputEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handleInputPass = (e) => {
    setPass(e.target.value)
    console.log(pass)
  }
  const handleLoginFacebook = (e) => {
    e.preventDefault();
    signIn('facebook', {
      callbackUrl: '/'
    });
  }
  const handleLoginGoogle = (e) => {
    e.preventDefault();
    signIn('google', {
      callbackUrl: '/'
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:9000/api/v1/user/');
    const users = await res.json()
    users.data?.map((user, id) => {
      if (user.email !== email && user.password !== pass) {
        if (email === '') {
          setErrorEmail('Masukkan data terlebih dahulu')
        } else if (!email.includes('@')) {
          setErrorEmail('Format email yang dimasukkan tidak memiliki “@”')
        } else if (!email.includes('@gmail.com')) {
          setErrorEmail('Format email tidak valid')
        } else if (user.email !== email && email !== '') {
          setErrorEmail("Email yang dimasukkan tidak terdaftar")
        } else {
          setErrorEmail('')
        }

        if (pass === '') {
          setErrorPass('Masukkan data terlebih dahulu')
          console.log('pass empty')
        } else if (pass.length < 4) {
          console.log('pass length')
          setErrorPass('Minimum 4 karakter')
        } else {
          setErrorPass('')
        }
      } else if (user.email === email && user.password !== pass) {
        setErrorPass("Password yang dimasukkan salah")
        setErrorEmail("")
      } else if (user.email !== email && user.password === pass) {
        setErrorEmail("Email yang dimasukkan tidak terdaftar")
        setErrorPass("")
      } else {
        localStorage.setItem('login', JSON.stringify({
          id,
          username: user.username,
          email: email,
        }))
        console.log("Berhasil")
        setErrorPass("")
        setErrorEmail("")
        stop()
        router.push("/")
      }


    })
    // console.log(users)

  }


  return (
    <div className={Styles.container_card}>
      <h2 className={Styles.text_login}>Masuk</h2>
      <p className={Styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
      <form className={Styles.container_input}>
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
      </form>
      <div className={Styles.sparator}>
        <Button btnOnClick={handleLogin} buttonType="primary" >
          Masuk
        </Button>
      </div>
      <div className={Styles.sparator}>
        <div className={Styles.hl}></div>
        atau
        <div className={Styles.hl}></div>
      </div>
      <div className={Styles.third_party}>
        <Button btnOnClick={handleLoginGoogle}>
          <FcGoogle size={24} style={{ marginRight: "8px" }} />Masuk dengan Google
        </Button>
        <Button btnOnClick={handleLoginFacebook}>
          <FaFacebook color="DodgerBlue" size={24} style={{ marginRight: "8px" }} />Masuk dengan Facebook
        </Button>
      </div>
      <div className={Styles.register_link}>
        Belum punya akun? <Link href="/auth/register" ><span className={Styles.orange_text}>Daftar</span></Link>
      </div>
    </div>
  )
}

export default CardLogin


