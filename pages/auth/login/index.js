import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import CardLogin from '../../../components/Card/CardLogin/CardLogin';
import FooterSecond from '../../../components/Footer/FooterSecond/FooterSecond';
import Styles from './Login.module.css';

function Login() {
  return (
    <>
      <Head>
        <title>Pijar | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={Styles.container_login}>
        <Image className={Styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} alt='logo' />
        <div className={Styles.login_content}>
          <Image className={Styles.login_ilustration} src="/new-profile.svg" width={480} height={480} alt='ilustration' />
          <CardLogin />
        </div>
      </main>
      <FooterSecond />
    </>
  )
}

export default Login
