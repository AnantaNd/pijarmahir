import Head from "next/head";
import Filter from "../../components/Filter/Filter";
import Layouts from "../../components/Layouts/Layouts";
import ListCourse from "../../components/ListCourse/ListCourse";
import styles from "./category.module.css";

export default function index(){
  return(
    <>
    <Head>
      <title>Pijar Mahir - kursus</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/pijar_logo.svg" />
    </Head>
    <Layouts>
      <div className={styles.container}>
        <div className={styles.filter}>
          {/* <Section> */}
            <Filter/>
          {/* </Section> */}
        </div>
        <div className={styles.content}>
          {/* <Section> */}
            <ListCourse img={'/mahirprakerja.jpg'} title={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} mitra={'cariilmu'} rating={3.3} ulasan={12}/>
            <ListCourse img={'/mahirprakerja.jpg'} title={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} mitra={'cariilmu'} rating={3.3} ulasan={12}/>
            <ListCourse img={'/mahirprakerja.jpg'} title={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} mitra={'cariilmu'} rating={3.3} ulasan={12}/>
            <ListCourse img={'/mahirprakerja.jpg'} title={'Belajar Mengelola Usaha Budi Daya Jamur untuk Calon Pengusaha Jamur'} price={10} mitra={'cariilmu'} rating={3.3} ulasan={12}/>
          {/* </Section> */}
        </div>
      </div>
    </Layouts>
    </>
  )
}