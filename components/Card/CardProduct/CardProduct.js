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
        {diskon? 
          <>
            <div className={Styles.containerDiskon}>
              <p className={Styles.diskon}>Rp. {harga}</p>
              <p className={Styles.percentage}>{diskon}%</p>
            </div>
            <h3 className={Styles.totalDiskon}>Rp. {totalDiskon}</h3>
          </>
          :
          <h3 className={Styles.harga}>{harga}</h3>
        }
      </div>
    </div>
  )
}

export default CardProduct
