import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';
import Styles from './ModalCart.module.css';

function ModalCart() {
  return (
    <div className={Styles.modal}>
      <div className={Styles.modal_header}>
        Notifikasi <p className={Styles.read_all}>Tandai Semua Dibaca</p>
      </div>
      <div className={Styles.modal_content}>
        <div className={Styles.modal_body}>
          <Image src="/no-result.svg" height={200} width={200} />
          <h2 className={Styles.result_status}>Kamu Belum Memiliki Transaksi</h2>
          <p className={Styles.status_text}>Notifikasi transaksimu akan muncul di sini</p>
          <div className={Styles.button_buy}>
            <Button buttonType="primary">Cari Kursus</Button>
          </div>
        </div>
        <div className={Styles.see_all}>Lihat Semua</div>
      </div>
    </div>
  )
}

export default ModalCart
