import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Styles from "./CardLogin.module.css";

function CardLogin() {
  // const { data: session } = useSession();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errorPass, setErrorPass] = useState("")
  const [errorEmail, setErrorEmail] = useState("")

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
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '') {
      setErrorEmail('isi terlebih dahulu email')
    } else if (!email.includes('@')) {
      setErrorEmail('email harus memilik karakter @')
    } else if (!email.includes('@gmail.com')) {
      setErrorEmail('email tidak valid')
    } else {
      setErrorEmail('')
    }

    if (pass === '') {
      setErrorPass('isi password terlebih dahulu')
      console.log('pass empty')
    } else if (pass.length < 4) {
      console.log('pass length')
      setErrorPass('password harus memiliki minimal 4 karakter')
    } else {
      setErrorPass('')
    }
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
        <Button btnOnClick={handleLogin} buttonType="primary" buttonNav={"btnLogin"}>
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
        Belum punya akun? <span className={Styles.orange_text}>Daftar</span>
      </div>
    </div>
  )
}

export default CardLogin
