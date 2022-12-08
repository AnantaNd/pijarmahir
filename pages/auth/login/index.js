import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import CardLogin from '../../../components/Card/CardLogin/CardLogin';
import FooterSecond from '../../../components/Footer/FooterSecond/FooterSecond';
import Styles from './Login.module.css';


export const getStaticProps = async () => {
  try {
    const res = await axios('http://localhost:9000/api/v1/user/');
    const data = await res.json();
    return {
      props: { props: data }
    }
  } catch (err) {
    console.error(err)
  }

  return {
    props: { props: [] }
  }
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
})

function Login({ props }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [isEmail, setIsEmail] = useState(false)
  const [isPass, setIsPass] = useState(false)

  const { register, handleSubmit, formState: { errors } } 
  = useForm
  ({
    resolver: yupResolver(schema)
  });
  console.log(errors)
  // console.log(props.data)

  const handleInputEmail = (e) => {
    setEmail(e.target.value)
    // console.log(e.target.value)
  }
  const handleInputPass = (e) => {
    setPass(e.target.value)
    // console.log(e.target.value)
  }

  const handleLogin = () => {
    // props?.data?.filter(user =>{
    //   return user.email === email && user
    // })
    // console.log(email + pass);
  }
  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Pijar | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <main className={Styles.container_login}>
        <Image alt="logo" className={Styles.logo} src="/pijar_logo.svg" height={80} width={80} style={{ marginLeft: "auto", marginRight: "auto" }} />
        <div className={Styles.login_content}>
          <Image alt="ilustration" className={Styles.login_ilustration} src="/new-profile.svg" priority={true} width={480} height={480} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardLogin handleLogin={handleLogin} inputUsername={handleInputEmail} inputPassword={handleInputPass} registerE={{...register("email")}} registerP={{...register('pass')}} helpersE={errors.email?.message} helpersP={errors.password?.message}/>
          </form>
        </div>
      </main>
      <FooterSecond />
    </>
  )
}

export default Login