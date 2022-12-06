import { useSession } from "next-auth/react";
import Head from "next/head";
import Category from "../components/Category/Category";
import CourseCountainer from '../components/CourseContainer/CourseContainer';
import KartuPrakerja from "../components/KartuPrakerja/KartuPrakerja";
import Layouts from "../components/Layouts/Layouts";
import ListCourse from "../components/ListCourse/ListCourse";
import Section from "../components/Section/Section";
import SwiperSlide from "../components/SwiperSlides/SwiperSlides";
import { dataCategory } from '../data';
import styles from '../styles/Home.module.css';


export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Pijar Mahir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pijar_logo.svg" />
      </Head>

      <Layouts>
        {/* Banner */}
        <Section>
          <SwiperSlide />
        </Section>
        {/* End Banner */}

        {/* Category */}
        <Section>
          <Category />
          <div className={styles.hl}></div>
        </Section>
        {/* End Category */}

        {/* Kartu Prakerja */}
        <KartuPrakerja dataCard={dataCategory.prakerja} />
        {/* End Kartu Prakerja */}

        {/* Mahir prakerja 2022 */}
        <Section>
          <CourseCountainer title={"Mahir Prakerja 2022"}/>
        </Section>
        {/* Mahir prakerja 2022 */}

        <Section>
          <ListCourse img={'/mahirprakerja.jpg'} title={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} mitra={'cariilmu'} rating={3.3} ulasan={12}/>
        </Section>
      </Layouts>

      <footer></footer>
    </>
  );
}
