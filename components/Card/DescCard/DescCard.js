import { MdNotificationsActive } from 'react-icons/md'
import styles from './DescCard.module.css'
export default function DescCard({desc}){
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
          <p className={styles.desc}>{desc}
            Pelatihan ini menerapkan kompetensi atau okupasi yang diambil dari rujukan Klasifikasi Baku Jabatan Indonesia 2014: Tenaga Perkantoran Umum 4110.00 Pelatihan ini akan mempelajari cara mencatat, mempersiapkan, memilah, mengklarifikasikan dan mengarsip informasi; cara menyortir data yang diperlukan; Menyusun laporan dan surat-menyurat secara rutin; memeriksa data angka yang mau diolah dan mencatat rincian transaksi keuangan yang dilakukan; menyalin informasi, mengoreksi catatan, memperbaiki Salinan ke komputer.Sebelum mengikuti pelatihan, ada beberapa hal yang harus dipersiapkan yaitu: Peserta harus memiliki pc/laptop, digunakan untuk mempraktekkan materi Peserta diminta untuk mengunduh aplikasi Microsoft Word, Excel, Power Point Peserta harus menggunakan koneksi internet yang bagus agar dapat menyelesaikan pembelajaran dengan baik Profesi yang direkomendasikan setelah mengikuti pelatihan ini yaitu:Tenaga perkantoran umum Administrasi Perkantoran Sekretaris Tipe pelatihan ini adalah Self-Paced Learning. Peserta dapat langsung memulai pelatihan di Learning Management System (LMS) Course-Net disaat kapanpun dan dimanapun tanpa harus menunggu jadwal pelatihan. Pelatihan ini juga memiliki sesi konsultasi langsung bersama pelatih (coach) yang wajib diikuti oleh semua peserta dimana peserta bisa berkonsultasi apa saja terkait materi pelatihan yang belum dimengerti.
          </p>
          <h2 className={styles.sub_title}>total durasi</h2>
          <p className={styles.desc}>4000 menit</p>
          <h2 className={styles.sub_title}>level pelatihan</h2>
          <p className={styles.desc}>advanced</p>
        </div>
    </div>

  )
}