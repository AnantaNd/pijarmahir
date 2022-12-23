import Image from 'next/image';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { CiPlay1 } from 'react-icons/ci';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import Button from '../../Button/Button';
import styles from './CardDetail.module.css';


export default function CardDetail(){
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.img} src={'/mahirprakerja1.jpg'} alt='img' width={300} height={150}/>
        <h1 className={styles.price}>Rp. 100.000</h1>
        <Button buttonType="primary">Beli Sekarang</Button>
        <div className={styles.container_content}>
          <p className={styles.title}>benefit yang didapatkan</p>
          <p className={styles.text}><CiPlay1 size={18}/>vidio pelatihan</p>
          <p className={styles.text}><HiOutlineDocumentText size={18}/>dokumen pelatihan</p>
          <p className={styles.text}><TbCertificate size={18}/>sertifikat penyelesaian</p>
        </div>
        <hr></hr>
        <div className={styles.container_btn}>
          <div className={styles.btn}><MdOutlineFavoriteBorder size={20}/>whistlist</div>
          <hr></hr>
          <div className={styles.btn}><AiOutlineShareAlt size={20}/>share</div>
        </div>

      </div>
    </>
  )
}