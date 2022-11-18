import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './Navbar.module.css';
import { BiSearch, BiMenu, BiX, BiList } from "react-icons/bi";
import { FiChevronRight, FiList } from "react-icons/fi";
import Link from 'next/link';
import Button from '../Button/Button';

function Navbar() {
  const [isCollapse, setIsCollapse] = useState(false);

  const collapseHandler = () => {
    setIsCollapse(!isCollapse);
  }

  return (
    <nav className={Styles.container}>
      <Image className={Styles.logo_dekstop} src="/pijar_logo.svg" height={80} width={80} />
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
          <Image className={Styles.logo_mobile} src="/pijar_logo.svg" height={80} width={80} />
          <BiX size={24} onClick={collapseHandler} />
        </div>
        <ul className={Styles.menus}>
          <li className={Styles.nav_link}>
            <Image className={Styles.menu_icon} src="/prakerja_logo.svg" width={24} height={24} /><span>Prakerja</span><FiChevronRight className={Styles.menu_arrow} />
          </li>
          <li className={Styles.nav_link}>
            <Image className={Styles.menu_icon} src="/pijar_logo.svg" width={24} height={24} /><span>Pijar Camp</span> <FiChevronRight className={Styles.menu_arrow} />
          </li>
          <li className={Styles.nav_link}>
            <div className={Styles.vl}></div>
          </li>
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
        </ul >
      </div >
      <Link className={Styles.login_mobile} href="/auth/login" style={{ textDecoration: 'none' }}>
        <Button buttonNav={true} >Masuk</Button>
      </Link>
    </nav >
  )
}

export default Navbar
