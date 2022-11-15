import React from "react";
import Styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={Styles.container}>
      <Image src="/pijar_logo.svg" width={80} height={48} />
      <div className={Styles.nav_menus}>
        {/* Disini Dropdown */}
        <select className={Styles.dropdown}>
          <option value="">Kategori</option>
        </select>
        {/* Disini Search */}
        <div className={Styles.container_input}>
          <input type="text" className={Styles.input} placeholder="Cari kursus yang kamu inginkan" />
          <button className={Styles.input_button}>
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.74832 13.5841 10.8995 12.8834 11.8226L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7641 17.2966 16.3474 17.3208 16.0538 17.1029L15.9697 17.0303L11.8226 12.8834C10.8995 13.5841 9.74832 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4.5C6.29086 4.5 4.5 6.29086 4.5 8.5C4.5 10.7091 6.29086 12.5 8.5 12.5C10.7091 12.5 12.5 10.7091 12.5 8.5C12.5 6.29086 10.7091 4.5 8.5 4.5Z" fill="#7D8997">
              </path>
            </svg>
          </button>
        </div>
        <ul className={Styles.nav_links}>
          <li className={Styles.nav_link}>Prakerja</li>
          <li className={Styles.nav_link}>Pijar Camp</li>
          <li className={Styles.nav_link}><div className={Styles.vl}></div></li>
          <li className={Styles.nav_link}><button className={Styles.button + " " + Styles.button_login}>Masuk</button></li>
          <li className={Styles.nav_link}><button className={Styles.button + " " + Styles.button_register}>Daftar</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
