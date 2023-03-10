/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useState } from "react";
import CardDetail from "../../../components/Card/CardDetail/CardDetail";
import DescCard from "../../../components/Card/DescCard/DescCard";
import Hero from "../../../components/Hero/Hero";
import Layouts from "../../../components/Layouts/Layouts";
import styles from './Detail.module.css';

export default function index({course}) {
  const [data, setData] = useState(course)
  

  console.log(data)

  // const getCourse = async()=>{
  //   try{
  //     const res = await fetch(`http://localhost:9000/api/v1/course/${id}`)
  //     const data = await res.json()
  //     setCourseId(data)
  //     console.log(data)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  // useEffect(()=>{
  //   getCourse()
  // })

  return (
    <>
      <Head>
        <title>Pijar Mahir | detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>
      <Layouts>
        <div className={styles.container}>
          <Hero title={data.data.fullname} tag={data.data.coursetype} mitra={data.data.teacher} ulasan={data.data.rating} people={data.data.enrolledusers}/>
          <div className={styles.container_content}>
            <CardDetail price={data.data.price} />
            <DescCard desc={data.data.summary} time={data.data.duration}/>
          </div>
        </div>

      </Layouts>
    </>
  )
}
export async function getServerSideProps({params}){
  
  try{
    const res1 = await fetch('http://localhost:9000/api/v1/course/'+params.id)

    // response
    const course = await res1.json()
 
    return {
      props:{
        course
      }
    }
  }catch(err){
    console.error(err)
  }
  return{
    props: {
     course

    }
  }
}
