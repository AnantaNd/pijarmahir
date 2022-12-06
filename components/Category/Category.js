import Image from 'next/image'
import React from 'react'
import Styles from './Category.module.css'

function Category({ title, data }) {
  return (
    <>
      {
        title && <h3 className={Styles.title}>{title}</h3>
      }
      <div className={Styles.cards_container}>
        {
          data?.map((d, idx) => {
            return (
              <div className={Styles.card}>
                <Image className={Styles.card_img} src={d.img} width={255} height={135} style={{ borderRadius: "4px" }} />
                <p className={title && Styles.text_center}>
                  {d.title}
                </p>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default Category
