import Head from "next/head";
import Image from "next/image";
import CardSignUp from "../../components/Card/CardSignUp/CardSignUp";
import FooterSecond from '../../components/Footer/FooterSecond/FooterSecond';
import styles from "./Register.module.css";

export default function index(){
  return(
    <>
      <Head>
        <title>Pijar | Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={styles.container}>
        <Image className={styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} alt='logo'/>
        <div className={styles.content}>
          <Image className={styles.ilustration} src="/new-profile.svg" height={480} width={480} style={{ marginLeft: "auto", marginRight: "90px" }} alt='ilustration'/>
          <CardSignUp/>
        </div>
      </main>
      <FooterSecond/>
    </>
  )
}