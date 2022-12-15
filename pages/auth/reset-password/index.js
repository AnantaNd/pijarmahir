import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CardForgotPass from '../../../components/Card/CardForgotPass/CardForgotPass';
import FooterSecond from '../../../components/Footer/FooterSecond/FooterSecond';
import Styles from './ResetPassword.module.css';

function ResetPassword() {
  return (
    <>
      <Head>
        <title>Pijar | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={Styles.container_login}>

        <Link href="/">
          <Image className={Styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} />
        </Link>
        <div className={Styles.login_content}>
          <Image className={Styles.login_ilustration} src="/new-password.svg" width={525} height={525} />
          <CardForgotPass />
        </div>
      </main>
      <FooterSecond />
    </>
  )
}

export default ResetPassword
