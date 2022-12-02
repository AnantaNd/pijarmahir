import Image from 'next/image';
import React from 'react'
import Styles from "./Footer.module.css";

function FooterSecond() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.left}>
        <Image src="/pijar_logo.svg" width={64} height={44} alt="Logo" />
        <p>©2020-2022 Pijar Mahir. All Right Reserved</p>
      </div>
      <ul className={Styles.right}>
        <li>Tentang Pijar</li>
        <li>Pusat Bantuan</li>
        <li>Hubungi Kami</li>
      </ul>
    </footer>
  )
}

export default FooterSecond
