import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Styles from "./CardLogin.module.css";

function CardLogin() {
  const {data: session} = useSession()

  return (
    <div className={Styles.container_card}>
      <h2 className={Styles.text_login}>Masuk</h2>
      <p className={Styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
      <Input label="Email" name="email" type="email" placeholder="example@gmail.com" />
      <Input label="Password" name="password" type="password" placeholder="" />
      <div className={Styles.helper}>
        <div className={Styles.container_checkbox}>
          <input className={Styles.checkbox} name="checkbox" type="checkbox" />
          <label className={Styles.label_checkbox} htmlFor="checkbox">Ingat akun Saya</label>
        </div>
        <Link href="/auth/reset-password" style={{ textDecoration: "none" }} ><p className={Styles.orange_text}>Lupa Password?</p></Link>
      </div>
      <div className={Styles.sparator}>
        <Button buttonType="primary">
          Masuk
        </Button>
      </div>
      <div className={Styles.sparator}>
        <div className={Styles.hl}></div>
        atau
        <div className={Styles.hl}></div>
      </div>
      <div className={Styles.third_party}>
        <Button>
          <FcGoogle size={24} style={{ marginRight: "8px" }} />Masuk dengan Google
        </Button>
        <Button btnOnClick={()=>signIn()}>
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
