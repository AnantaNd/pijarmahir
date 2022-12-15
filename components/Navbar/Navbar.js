import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenu, BiSearch, BiX, BiLogOut, BiCart, BiNotification, BiUser, BiBook, BiHistory, BiHeart, BiCertification, BiGift } from "react-icons/bi";
import { FiChevronRight, FiSettings } from "react-icons/fi";
import Button from '../Button/Button';
import Styles from './Navbar.module.css';
import { useSession } from "next-auth/react";
import ModalAccount from '../Modal/ModalAccount/ModalAccount';
import ModalNotification from '../Modal/ModalNotification/ModalNotification';
import ModalCart from '../Modal/ModalCart/ModalCart';

function Navbar() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isUserCollapse, setIsUserCollapse] = useState(false);
  const [isNotifCollapse, setIsNotifCollapse] = useState(false);
  const [isCartCollapse, setIsCartCollapse] = useState(false);
  const [loginInfo, setLoginInfo] = useState(null);
  const [hasLoginInfo, setHasLoginInfo] = useState(null);

  const { data: session, status } = useSession();

  const collapseHandler = () => {
    setIsCollapse(!isCollapse);
  }

  const accountCollapse = () => {
    setIsUserCollapse(!isUserCollapse);
    if (isNotifCollapse) setIsNotifCollapse(!isNotifCollapse);
    if (isCartCollapse) setIsCollapse(!isCartCollapse);
  }

  const notifCollapse = () => {
    setIsNotifCollapse(!isNotifCollapse);
    if (isUserCollapse) setIsUserCollapse(!isUserCollapse);
    if (isCartCollapse) setIsCartCollapse(!isCartCollapse);
  }

  const cartCollapse = () => {
    setIsCartCollapse(!isCartCollapse);
    if (isUserCollapse) setIsUserCollapse(!isUserCollapse);
    if (isNotifCollapse) setIsNotifCollapse(!isNotifCollapse);
  }

  useEffect(() => {
    setLoginInfo(localStorage.getItem('login'))
    setHasLoginInfo(localStorage.hasOwnProperty('login'))
  }, [])

  return (
    <nav className={Styles.container}>
      <Image className={Styles.logo_dekstop} src="/pijar_logo.svg" height={80} width={80} alt='img' />
      <div className={Styles.dropdown_container}>
        <select className={Styles.dropdown}>
          <option value="">Kategori</option>
        </select>
      </div>
      <div className={Styles.toggler}>
        <BiMenu size={20} onClick={collapseHandler} />
      </div>
      <div className={Styles.container_input}>
        <input className={Styles.input} placeholder="Cari kursus yang kamu inginkan" />
        <button className={Styles.input_button}>
          <BiSearch size={16} />
        </button>
      </div>

      <div className={Styles.container_menus + " " + `${isCollapse ? Styles.collapse_active : ''}`}>
        <div className={Styles.container_logo_mobile}>
          <Image className={Styles.logo_mobile} src="/pijar_logo.svg" height={80} width={80} alt='img' />
          <BiX size={24} onClick={collapseHandler} />
        </div>
        <ul className={Styles.menus}>
          <li className={Styles.nav_link}>
            <Image className={Styles.menu_icon} src="/prakerja_logo.svg" width={24} height={24} alt='img' /><Link className={Styles.link} style={{ textDecoration: 'none' }} href="https://pijarmahir.id/kartuprakerja"><span>Prakerja</span></Link><FiChevronRight className={Styles.menu_arrow} />
          </li>
          <li className={Styles.nav_link}>
            <Image className={Styles.menu_icon} src="/pijar_logo.svg" width={24} height={24} alt='img' /><span>Pijar Camp</span> <FiChevronRight className={Styles.menu_arrow} />
          </li>
          <li className={Styles.nav_link}>
            <div className={Styles.vl}></div>
          </li>
          {
            !session && !hasLoginInfo &&
            <>
              <li className={Styles.nav_link}>
                <Link href="/auth/login" style={{ textDecoration: 'none' }}>
                  <Button buttonNav={true} >Masuk</Button>
                </Link>
              </li>
              <li className={Styles.nav_link}>
                <Link href="/auth/register" style={{ textDecoration: 'none' }}>
                  <Button buttonType={true} buttonNav={true} >Daftar</Button>
                </Link>
              </li>
            </>
          }
          {
            session &&
            <>
              <li className={Styles.nav_link + ' ' + Styles.menu}> <BiBook className={Styles.icon_logged} size={24} /> Kursus</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiHistory className={Styles.icon_logged} size={24} /> Riwayat Transaksi</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiHeart className={Styles.icon_logged} size={24} /> Whislist</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiCertification className={Styles.icon_logged} size={24} /> Sertifikat</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiGift className={Styles.icon_logged} size={24} /> Reedem</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><FiSettings className={Styles.icon_logged} size={24} /> Pengaturan Profile</li>
              <li className={Styles.nav_link + ' ' + Styles.menu} onClick={() => signOut()} >
                <BiLogOut className={Styles.icon_logged} size={24} /> Keluar</li>
              <li className={Styles.nav_link + ' ' + Styles.cart_mobile}>
                <BiCart size={24} onClick={cartCollapse} />
                {isCartCollapse && <ModalCart />}
              </li>
              <li className={Styles.nav_link + ' ' + Styles.notif_mobile}>
                <BiNotification size={24} onClick={notifCollapse} />
                {isNotifCollapse && <ModalNotification />}
              </li>
              <li className={Styles.nav_link + ' ' + Styles.account_mobile}>
                <BiUser size={24} onClick={accountCollapse} />
                {isUserCollapse && <ModalAccount />}
              </li>
            </>
          }
          {
            hasLoginInfo &&
            <>
              <li className={Styles.nav_link + ' ' + Styles.menu}> <BiBook className={Styles.icon_logged} size={24} /> Kursus</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiHistory className={Styles.icon_logged} size={24} /> Riwayat Transaksi</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiHeart className={Styles.icon_logged} size={24} /> Whislist</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiCertification className={Styles.icon_logged} size={24} /> Sertifikat</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><BiGift className={Styles.icon_logged} size={24} /> Reedem</li>
              <li className={Styles.nav_link + ' ' + Styles.menu}><FiSettings className={Styles.icon_logged} size={24} /> Pengaturan Profile</li>
              <li className={Styles.nav_link + ' ' + Styles.menu} onClick={() => signOut()} >
                <BiLogOut className={Styles.icon_logged} size={24} /> Keluar</li>
              <li className={Styles.nav_link + ' ' + Styles.cart_mobile}>
                <BiCart size={24} onClick={cartCollapse} />
                {isCartCollapse && <ModalCart />}
              </li>
              <li className={Styles.nav_link + ' ' + Styles.notif_mobile}>
                <BiNotification size={24} onClick={notifCollapse} />
                {isNotifCollapse && <ModalNotification />}
              </li>
              <li className={Styles.nav_link + ' ' + Styles.account_mobile}>
                <BiUser size={24} onClick={accountCollapse} />
                {isUserCollapse && <ModalAccount />}
              </li>
            </>

          }
        </ul >
      </div >
      <Link className={Styles.login_mobile} href="/auth/login" style={{ textDecoration: 'none' }}>
        {session ? <Button btnOnClick={() => signOut()} buttonType={true} buttonNav={true} >keluar</Button> : <Button buttonNav={true} >Masuk</Button>}
      </Link>
      {
        console.log(loginInfo)
      }
    </nav >
  )
}

export default Navbar
