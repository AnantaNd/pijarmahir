import { useSession } from "next-auth/react";
import Head from "next/head";
import SwiperBtn from "../components/Button/SwipperBtn/SwipperBtn";
import CardCourse from "../components/Card/CardCourse/CardCourse";
import Category from "../components/Category/Category";
import CategoryContainer from "../components/CategoryContainer/CategoryContainer";
import Layouts from "../components/Layouts/Layouts";
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
        <CategoryContainer dataCard={dataCategory.prakerja} />
        {/* End Kartu Prakerja */}

        {/* Mahir prakerja 2022 */}
        <Section>
          <h1 className={styles.courseCategory}>Mahir Prakerja 2022</h1>
          <SwiperBtn>
            <div className={styles.containerCourse}>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
            </div>
          </SwiperBtn>
        </Section>
        {/* Mahir prakerja 2022 */}

        <Section>
          <h1 className={styles.courseCategory}>Mahir Prakerja 2022</h1>
          <SwiperBtn>
            <div className={styles.containerCourse}>
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
              <CardCourse img={'/mahirprakerja1.jpg'} course={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} subtitle={'cariilmu'} rating={3.3} />
            </div>
          </SwiperBtn>
        </Section>

      </Layouts>

      <footer></footer>
    </>
  );
}
