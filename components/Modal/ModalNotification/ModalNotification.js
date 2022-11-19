import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../../Button/Button';
import Styles from './ModalNotification.module.css';

function ModalNotification() {
  const [allTransaction, setAllTransaction] = useState(true);
  const [pendingTransaction, setPendingTransaction] = useState(false);

  const handleActiveAllTransaction = () => {
    setAllTransaction(!allTransaction);
    setPendingTransaction(!pendingTransaction);
  }

  const handlePendingTransaction = () => {
    setPendingTransaction(!pendingTransaction);
    setAllTransaction(!allTransaction);
  }

  return (
    <div className={Styles.modal}>
      <div className={Styles.modal_header}>
        Notifikasi <p className={Styles.read_all}>Tandai Semua Dibaca</p>
      </div>
      <div className={Styles.modal_content}>
        <div className={Styles.transaction}>
          <div
            onClick={handleActiveAllTransaction}
            className={
              Styles.transaction_status + ` ${allTransaction && Styles.transaction_mark}`
            }
          >
            Semua Transaksi
          </div>
          <div onClick={handlePendingTransaction} className={
            Styles.transaction_status + ` ${pendingTransaction && Styles.transaction_mark}`}
          >
            Menunggu
          </div>
        </div>
        <div className={Styles.hl}></div>
        <div className={Styles.modal_body}>
          <Image src="/no-result.svg" height={200} width={200} />
          <h2 className={Styles.result_status}>Kamu Belum Memiliki Transaksi</h2>
          <p className={Styles.status_text}>Notifikasi transaksimu akan muncul di sini</p>
          <div className={Styles.button_buy}>
            <Button buttonType="primary">Beli Kursus</Button>
          </div>
        </div>
        <div className={Styles.see_all}>Lihat Semua</div>
      </div>
    </div>
  )
}

export default ModalNotification
