import Image from 'next/image';
import React from 'react';
import Styles from './CardTestimoni.module.css'

function CardTestimoni() {
  return (
    <div className={Styles.container_card}>
      <div className={Styles.testimoni}>
        Lorem ipsum dolor sit amet
      </div>
      <div className={Styles.class_review}>
        <p className={Styles.comment}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis maxime in unde excepturi, temporibus quaerat cupiditate similique vel commodi, provident modi, voluptates libero cumque possimus repellendus ratione cum at optio magnam dolorem beatae. Recusandae fugit voluptates quia illo asperiores harum.
        </p>
      </div>
      <div className={Styles.profile}>
        <Image width={48} height={48} src="/mahirBahasa_category.png" style={{ borderRadius: "100px" }} />
        <p className={Styles.username}>
          Maulana Akbar Ramadhan
        </p>
      </div>
    </div>
  )
}

export default CardTestimoni
