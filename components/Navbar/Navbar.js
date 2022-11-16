import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './Navbar.module.css';
import { BiSearch, BiMenu, BiX, BiList } from "react-icons/bi";
import { FiChevronRight, FiList } from "react-icons/fi";
import Link from 'next/link';

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
            <FiList className={Styles.menu_icon} style={{ marginRight: "18px" }} /><span>Kategori</span> <FiChevronRight className={Styles.menu_arrow} />
          </li>
          <li className={Styles.nav_link}>
            <div className={Styles.vl}></div>
          </li>
          <li className={Styles.nav_link}>
            <button className={Styles.button_dekstop + " " + Styles.button_login}>Masuk</button>
          </li>
          <li className={Styles.nav_link}>
            <button className={Styles.button_dekstop + " " + Styles.button_register}>Daftar</button>
          </li>
        </ul >
      </div >
      <Link href="/login" style={{ textDecoration: 'none' }}><button className={Styles.button_mobile + " " + Styles.button_login}>Masuk</button></Link>
    </nav >
  )
}

export default Navbar
