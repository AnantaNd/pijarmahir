import React from 'react';
import Styles from './CardProduct.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai'

function CardProduct({ img, title, rating, harga, category }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.card_image} style={{ backgroundImage: `url('/cardProduct1.jpeg')` }} >
        <FaRegHeart size={32} className={Styles.fav_icon} />
      </div>
      <div className={Styles.card_body}>
        <h4 className={Styles.card_title}>{title}Belajar Teknik Digital Marketing Untuk Menjadi ...</h4>
        <p className={Styles.category}>{category}MyEduSolve -</p>
        <p className={Styles.rating}>{rating}
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          &nbsp; <span className={Styles.rating_review}>5.0 (120 Ulasan)</span>
        </p>
        <h3 className={Styles.harga}>{harga}Rp.200.000</h3>
      </div>
    </div>
  )
}

export default CardProduct
