import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Styles from './ModalAccount.module.css';
import { BiBook, BiHistory, BiHeart, BiCertification, BiGift, BiLogOut } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi'
import Image from 'next/image';

function ModalAccount() {
  const { data: session } = useSession();

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut('facebook');
    localStorage.removeItem('login')
  }

  return (
    <div className={Styles.modal}>
      <ul className={Styles.modal_content}>
        <li className={Styles.nav_link}>
          {/* <Image src={"./" + session && session?.user?.image[0]} width={40} height={40} /> */}
          <div className={Styles.account}>
            <span className={Styles.user_name}>{session ? session.user.name : localStorage.hasOwnProperty('login') ? JSON.parse(localStorage.getItem('login')).username : ""}</span>
            <span className={Styles.user_email}>{session ? session.user.email : localStorage.hasOwnProperty('login') ? JSON.parse(localStorage.getItem('login')).email : ""}</span>
          </div>
        </li>
        <li className={Styles.nav_link}><div className={Styles.hl}></div></li>
        <li className={Styles.nav_link}> <BiBook size={24} /> Kursus</li>
        <li className={Styles.nav_link}><BiHistory size={24} /> Riwayat Transaksi</li>
        <li className={Styles.nav_link}><BiHeart size={24} /> Whislist</li>
        <li className={Styles.nav_link}><BiCertification size={24} /> Sertifikat</li>
        <li className={Styles.nav_link}><BiGift size={24} /> Reedem</li>
        <li className={Styles.nav_link}><FiSettings size={24} /> Pengaturan Profile</li>
        <li className={Styles.nav_link}><div className={Styles.hl}></div></li>
        <li className={Styles.nav_link} onClick={handleLogOut} ><BiLogOut size={24} /> Keluar</li>
      </ul>
    </div>
  )
}

export default ModalAccount
