import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import YupPassword from "yup-password";
import Button from "../../../components/Button/Button";
import FooterSecond from '../../../components/Footer/FooterSecond/FooterSecond';
import Input from "../../../components/Input/Input";
import Styles from './Login.module.css';
YupPassword(yup)

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .required("Masukan data terlebih dahulu")
//     .matches("@", "Format email yang dimasukkan tidak memiliki “@”")
//     .email("Format email tidak valid"),
//   password: yup
//     .string()
//     .required("Masukkan data terlebih dahulu")
//     .min(4, 'Password minimal 4 karakter'),
// })

function Login({ users }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errorPass, setErrorPass] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const router = useRouter()

  // const { register, handleSubmit, formState: { errors } }
  //   = useForm({
  //     resolver: yupResolver(schema)
  //   });

  const handleInputEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleInputPass = (e) => {
    setPass(e.target.value)
    console.log(pass.length)
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
      setErrorPass('password harus memiliki 4 karakter')
    } else {
      setErrorPass('')
    }

    // mapping email 
    users.data?.map((user, id) => {
      if (user.email !== email && user.password !== pass) {
        if (email === '') {
          setErrorEmail('isi terlebih dahulu email')
        } else if (!email.includes('@')) {
          setErrorEmail('email harus memilik karakter @')
        } else if (!email.includes('@gmail.com')) {
          setErrorEmail('email tidak valid')
        } else {
          setErrorEmail("Email yang dimasukkan tidak terdaftar")
        }

        if (pass === '') {
          setErrorPass('isi password terlebih dahulu')
          console.log('pass empty')
        } else if (pass.length < 4) {
          console.log('pass length')
          setErrorPass('password harus memiliki 4 karakter')
        } else {
          setErrorPass('')
        }
        // router.push('/')
      } else if (user.email === email && user.password !== pass) {
        setErrorPass("Password yang dimasukkan salah")
        setErrorEmail("")
      } else if (user.email !== email && user.password === pass) {
        setErrorEmail("Email yang dimasukkan tidak terdaftar")
        setErrorPass("")
      } else {
        localStorage.setItem('login', JSON.stringify({
          id,
          username: user.username,
          email: email,
        }))
        console.log("Berhasil")
        setErrorPass("")
        setErrorEmail("")
        stop()
      }


    })
  }

  const btnLogin = () => {
    // users.data?.map((user, id)=>{
    //   if(user.email === email && user.password === pass){
    //     localStorage.setItem('login', JSON.stringify({
    //       id,
    //       username: user.username,
    //       email: email,
    //     }))
    //     // router.push('/')
    //   }else if(user.email === email && user.password !== pass){
    //     setErrorPass("Password yang dimasukkan salah")
    //     setErrorEmail("")
    //   }else if(user.email !== email && user.password === pass){
    //     setErrorEmail("Email yang dimasukkan tidak terdaftar")
    //     setErrorPass("")
    //   }
    // })
  }
  // const onSubmit = (data) => {
  //   console.log(data)
  // users.data.map((user, id) => {
  //   if (user.email === data.email && user.password === data.password) {
  // console.log(`${user.email + "===" + data.email} ${user.password + "===" + data.password}`);
  //     localStorage.setItem('login', JSON.stringify({
  //       id,
  //       username: user.username,
  //       email: user.email,
  //     }))
  //     router.push('/')
  //   } else if (user.email === data.email && user.password !== data.password) {
  //     setErrorPass("Password yang dimasukkan salah")
  //     setErrorEmail("")
  //   } else if (user.email !== data.email && user.password === data.password) {
  //     setErrorEmail("Email yang dimasukkan tidak terdaftar")
  //     setErrorPass("")
  //   }
  // })
  // }

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
  return (
    <>
      <Head>
        <title>Pijar | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={Styles.container_login}>
        <Link href="/">
          <Image alt="logo" className={Styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} />
        </Link>
        <div className={Styles.login_content}>
          <Image alt="ilustration" className={Styles.login_ilustration} src="/new-profile.svg" priority={true} width={480} height={480} />
          <form onSubmit={handleLogin}>
            <div className={Styles.container_card}>
              <h2 className={Styles.text_login}>Masuk</h2>
              <p className={Styles.suggestion}>Lanjutkan pembelajaranmu dengan Pijar Mahir</p>
              {/* input */}
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
              {/* input */}
              <div className={Styles.helper}>
                <div className={Styles.container_checkbox}>
                  {/* <input className={Styles.checkbox} name="checkbox" type="checkbox" /> */}
                  {/* <label className={Styles.label_checkbox} htmlFor="checkbox">Ingat akun Saya</label> */}
                </div>
                <Link href="/auth/reset-password" style={{ textDecoration: "none" }} >
                  <p className={Styles.orange_text}>Lupa Password?</p>
                </Link>
              </div>
              <div className={Styles.sparator}>
                <Button buttonType="primary" type={"submit"} >
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
                Belum punya akun? <Link href="/auth/register" style={{ textDecoration: "none" }}><span className={Styles.orange_text}>Daftar</span></Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <FooterSecond />
    </>
  )
}

export default Login

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