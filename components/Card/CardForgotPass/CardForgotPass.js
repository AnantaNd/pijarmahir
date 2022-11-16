import React from 'react';
import Styles from "./CardForgotPass.module.css";
import Input from '../../Input/Input';
import Button from '../../Button/Button';

function CardForgotPass() {
  return (
    <div className={Styles.container_card}>
      <h2 className={Styles.title_card}>Lupa Password?</h2>
      <p className={Styles.subtitle_card}>Masukkan email yang terdaftar untuk terima kode verifikasi sebelum reset password</p>
      <Input label="Email" name="email" type="email" placeholder="example@gmail.com" helper="Kami akan mengirim kode verifikasi ke emailmu" />
      <div className={Styles.sparator}></div>
      <Button buttonType="primary">
        Lanjutkan
      </Button>
    </div>
  )
}

export default CardForgotPass
