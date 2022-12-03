import Image from 'next/image'
import React from 'react'
import Styles from './Category.module.css'

function Category() {
  return (
    <div className={Styles.cards_container}>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/kartuPrakerja_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Kartu Prakerja
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/mahirTeknologi_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Mahir Teknologi
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/mahirDigital_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Mahir Digital
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/mahirMarketing_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Mahir Marketing
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/pengembanganDiri_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Pengembangan Diri
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/mahirBahasa_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Mahir Bahasa
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/umkm_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        UMKM
      </div>
      <div className={Styles.card}>
        <Image className={Styles.card_img} src="/mahirTelekomunikasi_category.png" width={255} height={135} style={{ borderRadius: "4px" }} />
        Mahir Telekomunikasi
      </div>
    </div>
  )
}

export default Category
