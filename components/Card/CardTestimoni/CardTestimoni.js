import Image from 'next/image';
import React from 'react';
import Styles from './CardTestimoni.module.css';

function CardTestimoni({username, comment, title}) {
  return (
    <div className={Styles.container_card}>
      <div className={Styles.testimoni}>
        {title}
      </div>
      <div className={Styles.class_review}>
        <p className={Styles.comment}>
          {comment}
        </p>
      </div>
      <div className={Styles.profile}>
        <Image alt='img' width={48} height={48} src="/mahirBahasa_category.png" style={{ borderRadius: "100px" }} />
        <p className={Styles.username}>
          {username}
        </p>
      </div>
    </div>
  )
}

export default CardTestimoni
