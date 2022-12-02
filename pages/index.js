import { useSession } from "next-auth/react";
import Head from "next/head";
import SwiperBtn from "../components/Button/SwipperBtn/SwipperBtn";
import CardCourse from "../components/Card/CardCourse/CardCourse";
import Layouts from "../components/Layouts/Layouts";
import Section from "../components/Section/Section";
import SwiperSlide from "../components/SwiperSlides/SwiperSlides";
import styles from '../styles/Home.module.css';



export default function Home() {
  const { data: session } = useSession();



  return (
    <div>
      <Head>
        <title>Pijar Mahir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>

      <Layouts>
        <h2>Hello {session ? `${session.user.name}` : 'world'}</h2>

        <Section>
          <SwiperSlide />
        </Section>

        <Section>
          <h1 className={styles.courseCategory}>Mahir Prakerja</h1>
          <SwiperBtn>
            <div className={styles.containerCourse}>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3}/>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3}/>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3}/>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3}/>
            </div>
          </SwiperBtn>
        </Section>
      </Layouts>

      <footer></footer>
    </div>
  );
}
