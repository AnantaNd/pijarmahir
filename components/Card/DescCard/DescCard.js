import { MdNotificationsActive } from 'react-icons/md'
import styles from './DescCard.module.css'
export default function DescCard({desc, time}){
  return (
    <div className={styles.container}>
      {/* highlight */}
        <h1 className={styles.title}>highlight</h1>
        <div className={styles.container_highlight}>
          <h2 className={styles.sub_title}><MdNotificationsActive size={20}/>info penting kursus di mitra pelatihan</h2>
          <ul className={styles.list}>
            <li className={styles.item}>Kursus ini akan sepenuhnya kamu kerjakan di platform Mitra Pelatihan</li>
            <li className={styles.item}>Kami akan memberimu Kode Kursus untuk kamu tukarkan di platform Mitra Pelatihan</li>
            <li className={styles.item}>Sertifikat dari kursus ini juga hanya akan kamu terima di platform Mitra Pelatihan</li>
          </ul>
        </div>
        {/* <hr></hr> */}
        {/* desc */}
        <h1 className={styles.title}>detail</h1>
        <div className={styles.container_detail}>
          <h2 className={styles.sub_title}>deskripsi pelatihan</h2>
          <p className={styles.desc}>{desc}</p>
          <h2 className={styles.sub_title}>total durasi</h2>
          <p className={styles.desc}>{time}</p>
          <h2 className={styles.sub_title}>level pelatihan</h2>
          <p className={styles.desc}>advanced</p>
        </div>
    </div>

  )
}