import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from '../../Button/Button';
import Styles from "./CardLogin.module.css";

function CardLogin({ inputEmail, inputPassword, helpersE, helpersP, btnLogin, handleLogin, registerE, registerP}) {
  // const { data: session } = useSession();


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
  const formSubmit =(data)=>{
    console.log(data)
  }


  return (
    <div className={Styles.container_card}>
      <h2 className={Styles.text_login}>Masuk</h2>
      <p className={Styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
          <div className={Styles.container_input}>
            <label className={Styles.label_input} htmlFor='email'>Email</label>
            <input className={Styles.input} name='email' type='email' placeholder='example@mail.com' onChange={inputEmail} {...registerE}/>
            <small className={Styles.helper_account}>{helpersE}</small>
            <label className={Styles.label_input} htmlFor='pass'>Password</label>
            <input className={Styles.input} name='pass' type='password' placeholder='password' onChange={inputPassword} {...registerP}/>
            <small className={Styles.helper_account}>{helpersP}</small>
          </div>
      {/* <Input label="Password" name="password" type="password" placeholder="" onChangeInput={handleInputPass}/> */}

      <div className={Styles.helper}>
        <div className={Styles.container_checkbox}>
          <input className={Styles.checkbox} name="checkbox" type="checkbox" />
          <label className={Styles.label_checkbox} htmlFor="checkbox">Ingat akun Saya</label>
        </div>
        <Link href="/auth/reset-password" style={{ textDecoration: "none" }} ><p className={Styles.orange_text}>Lupa Password?</p></Link>
      </div>
      <div className={Styles.sparator}>
        <Button btnOnClick={handleLogin} buttonType="primary" buttonNav={btnLogin}>
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
