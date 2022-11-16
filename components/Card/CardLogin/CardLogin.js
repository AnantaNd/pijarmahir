import React from 'react';
import Button from '../../Button/Button';
import Styles from "./CardLogin.module.css";

function CardLogin() {
  return (
    <div className={Styles.container_card}>
      <h2 className={Styles.text_login}>Masuk</h2>
      <p className={Styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
      <div className={Styles.container_input}>
        <label className={Styles.label_input} htmlFor="email">Email</label>
        <input className={Styles.input} name="email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className={Styles.container_input}>
        <label className={Styles.label_input} htmlFor="email">Email</label>
        <input className={Styles.input} name="email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className={Styles.helper}>
        <div className={Styles.container_checkbox}>
          <input className={Styles.checkbox} name="checkbox" type="checkbox" />
          <label className={Styles.label_checkbox} htmlFor="checkbox">Ingat akun Saya</label>
        </div>
        <p className={Styles.orange_text}>Lupa Password?</p>
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
          Masuk
        </Button>
        <Button>
          Masuk
        </Button>
      </div>
      <div className={Styles.register_link}>
        Belum punya akun? <span className={Styles.orange_text}>Daftar</span>
      </div>
    </div>
  )
}

export default CardLogin
