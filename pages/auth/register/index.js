/* eslint-disable react-hooks/rules-of-hooks */
import { signIn } from 'next-auth/react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../components/Button/Button";
import FooterSecond from '../../../components/Footer/FooterSecond/FooterSecond';
import Input from "../../../components/Input/Input";
import styles from "./Register.module.css";

// const schema = yup.object({
//   email: yup
//     .string()
//     .required("Masukan data terlebih dahulu")
//     .matches("@", "Format email yang dimasukkan tidak memiliki “@”")
//     .email("Format email tidak valid"),
//   password: yup
//     .string()
//     .required("Masukan password terlebih dahulu")
//     .min(4, 'Password minimal 4 karakter'),
//   confirm_password: yup
//     .string()
//     .required('Masukan kembali password')
//     .oneOf([yup.ref('password')], 'Password harus sama'),
//   username: yup
//     .string()
//     .required('Masukan username')
// })



export default function index({users}) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorUserName, setErrorUserName] = useState('')
  const [errorConfmPass, setErrorConfmPass] = useState('')
  const router = useRouter()

  // const { register, handleSubmit, formState: { errors } }
  //   = useForm({
  //     resolver: yupResolver(schema)
  //   })


  // console.log(users)
  function handleInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleInputUsername(e) {
    setUsername(e.target.value);
  }
  const handleInputPass = (e) => {
    setPass(e.target.value)
  }
  const handleInputConfirm = (e) => {
    setConfirmPass(e.target.value)
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
  const handleSignup =(e)=>{
    e.preventDefault();
    if(username === ''){
      setErrorUserName('isi terlebih dahulu username')
    }else{
      setErrorUserName('')
    }

    if(email === ''){
      setErrorEmail('isi terlebih dahulu email')
    }else if(!email.includes('@')){
      setErrorEmail('eamil harus memiliki karakter @')
    }else if(!email.includes('gmail.com')){
      setErrorEmail('email tidak valid')
    }else{
      setErrorEmail('')
    }

    if(pass === ''){
      setErrorPass('isi password terlebih dahulu')
    }else if(pass.length < 4){
      setErrorPass('password harus memiliki minimal 4 karakter')
    }else{
      setErrorPass('')
    }

    if(confirmPass === ''){
      setErrorConfmPass('masukkan kembali password')
    }else if(confirmPass != pass){
      setErrorConfmPass('password harus sama')
    }else{
      setErrorConfmPass('')
    }
  }

  // console.log(users.data)
  // const onSubmit = async(data)=>{
  //   console.log(data);
  //   // metode post
  //   await fetch('http://localhost:9000/api/v1/user/', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     credentials: "include",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       "username": data.username,
  //       "password": data.password,
  //       "email": data.email,
  //       "no_tlp": "0912131",
  //       "birthdate": "2000-11-02",
  //       "gender": "male"
  //     })
  //   })
  //   // .then(res => console.log(res));
  //   // const opt = {
  //   //   method: 'POST',
  //   //   mode: 'no-cors',
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify({
  //   //     'username': data.username,
  //   //     'password': data.password,
  //   //     'email': data.email,
  //   //     'no_tlp': '0912131',
  //   //     'birthdate': '2000-11-02',
  //   //     'gender': 'male'
  //   //   })
  //   // }
  //   // const res = await fetch('http://localhost:9000/api/v1/user/', opt)
  //   // const result = await res.json()
  //   // console.log('result: ', result)
  //   localStorage.setItem('register', JSON.stringify({
  //     username: data.username,
  //     email: data.email,
  //   }));
  //   // router.push('/')
  //   // users.data?.map((user, id)=>{
  //   //   if(user.email !== data.email){
  //   //     fetch('http://localhost:9000/api/v1/user/',{
  //   //       method: 'POST',
  //   //       mode:'no-cors',
  //   //       headers: {'Content-Type': 'application/json'},
  //   //       body: JSON.stringify({
  //   //         id,
  //   //         username: data.username,
  //   //         email: data.email,
  //   //         password: data.password,
  //   //       })
  //   //     })
  //   //   }
  //   // })
  // }

  return (
    <>
      <Head>
        <title>Pijar | Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={styles.container}>
        <Link href="/">
          <Image className={styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} alt='logo' />
        </Link>
        <div className={styles.content}>
          <Image className={styles.ilustration} src="/new-profile.svg" height={480} width={480} style={{ marginRight: "90px" }} alt='ilustration' />
          <form method="post" className={styles.content} onSubmit={handleSignup}>
            <div className={styles.container_card}>
              <h2 className={styles.text_login}>Daftar</h2>
              <p className={styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
              {/* input */}
              <Input
                label={'Username'}
                name={'username'}
                type={"text"}
                placeholder={'username'}
                onChangeInput={handleInputUsername}
                helper={errorUserName}
                />
              <Input
                label={'Email'}
                name={'email'}
                type={"text"}
                placeholder={'example@gmail.com'}
                onChangeInput={handleInputEmail}
                helper={errorEmail}
                />
              <Input
                label={'Password'}
                name={'password'}
                type={"password"}
                placeholder={'password'}
                onChangeInput={handleInputPass}
                helper={errorPass}
                />
              <Input
                label={'Konfirmasi Password'}
                name={'password'}
                type={"password"}
                placeholder={'password'}
                onChangeInput={handleInputConfirm}
                helper={errorConfmPass}
                />
              {/* input */}
              <div className={styles.sparator}>
                <Button buttonType="primary" >
                  Daftar
                </Button>
              </div>
              <div className={styles.sparator}>
                <div className={styles.hl}></div>
                atau
                <div className={styles.hl}></div>
              </div>
              <div className={styles.third_party}>
                <Button btnOnClick={handleLoginGoogle}>
                  <FcGoogle size={24} style={{ marginRight: "8px" }} />Masuk dengan Google
                </Button>
                <Button btnOnClick={handleLoginFacebook}>
                  <FaFacebook color="DodgerBlue" size={24} style={{ marginRight: "8px" }} />Masuk dengan Facebook
                </Button>
              </div>
              <div className={styles.register_link}>
                sudah memiliki akun? <Link href="/auth/login" style={{ textDecoration: "none" }}><span className={styles.orange_text}>Masuk</span></Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <FooterSecond />
    </>
  )
}
export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:9000/api/v1/user/');
    const users = await res.json();
    return {
      props: { users }
    }
  } catch (err) {
    console.error(err)
  }
  return {
    props: { users: [] }
  }
}