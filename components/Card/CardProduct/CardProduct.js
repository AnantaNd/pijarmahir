import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import Styles from './CardProduct.module.css';

function CardProduct({ img, title, rating, harga, category, ulasan, diskon, totalDiskon }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.card_image} style={{ backgroundImage: "url(" + img + ")" }} >
        <FaRegHeart size={32} className={Styles.fav_icon} />
      </div>
      <div className={Styles.card_body}>
        <h4 className={Styles.card_title}>{title}</h4>
        <p className={Styles.category}>{category}</p>
        <p className={Styles.rating}>
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          <AiFillStar color='rgb(255, 138, 43)' />
          &nbsp; <span className={Styles.rating_review}>{rating} &nbsp; ({ulasan} ulasan)</span>
        </p>
        <div className={Styles.diskon}> Rp.{totalDiskon}<p className={diskon?Styles.percentage:''}>{diskon}%</p></div>
        <h3 className={Styles.harga}>Rp.{harga}</h3>
      </div>
    </div>
  )
}

export default CardProduct
