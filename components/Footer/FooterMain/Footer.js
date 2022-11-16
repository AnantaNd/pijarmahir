import Image from 'next/image';
import React from 'react';
import Styles from "./Footer.module.css";
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container_content}>
        <div className={Styles.content}>
          <Image src="/pijar_logo.svg" width={128} height={77} />
          <div className={Styles.powers}>
            <p className={Styles.powers_text}>Powerd By</p><Image src="/telkom_indonesia.png" width={80} height={54} />
          </div>
          <div className={Styles.contact_container}>
            <div className={Styles.contact}>
              <div className={Styles.contact_icon}>
                <IoLogoWhatsapp size={24} color="white" />
              </div>
              <div className={Styles.contact_info}>
                <p className={Styles.contact_name}>WhatsApp</p>
                <p className={Styles.contact_number}>085797234114</p>
              </div>
            </div>
            <div className={Styles.contact}>
              <div className={Styles.contact_icon}>
                <BiEnvelope size={24} color="white" />
              </div>
              <div className={Styles.contact_info}>
                <p className={Styles.contact_name}>Email</p>
                <p className={Styles.contact_number}>info@pijarmahir.id</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.content}>
          <ul className={Styles.li_content}>
            <li className={Styles.content_title}>Produk</li>
            <li className={Styles.content_list}>Tentang Pijar Mahir</li>
            <li className={Styles.content_list}>Pijar Camp</li>
            <li className={Styles.content_list}>Bermitra dengan Pijar Mahir</li>
          </ul>
        </div>
        <div className={Styles.content}>
          <ul className={Styles.li_content}>
            <li className={Styles.content_title}>Support</li>
            <li className={Styles.content_list}>Bantuan</li>
            <li className={Styles.content_list}>Hubungi Kami</li>
          </ul>
        </div>
        <div className={Styles.content}>
          <ul className={Styles.li_content}>
            <li className={Styles.content_title}>Blog</li>
            <li className={Styles.content_list}>Berita</li>
            <li className={Styles.content_list}>Program & Promo</li>
          </ul>
        </div>
        <div className={Styles.content + " " + Styles.no_border}>
          <ul className={Styles.li_content}>
            <li className={Styles.content_title}>Ikuti Kami</li>
            <li className={Styles.content_list}>
              <IoLogoInstagram className={Styles.social_media} size={32} />
              <IoLogoLinkedin className={Styles.social_media} size={32} />
              <IoLogoFacebook className={Styles.social_media} size={32} />
              <IoLogoTwitter className={Styles.social_media} size={32} />
            </li>
            <li className={Styles.content_title}>Bermitra dengan Pijar Mahir</li>
            <li className={Styles.content_list}><Image className={Styles.playstore} src="/playstore.svg" width={144} height={42} /></li>
          </ul>
        </div>
      </div>
      <div className={Styles.services}>
        <div className={Styles.address_service}>
          <p className={Styles.service_title}>Layanan Pengaduan Konsumen</p>
          <p className={Styles.service_title}>Gedung Telkom Direktorat Business and Technology</p>
          <p className={Styles.service_info}>Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810</p>
        </div>
        <div className={Styles.address_service}>
          <p className={Styles.service_title}>Kontak Pelanggaran Usaha</p>
          <p className={Styles.service_title}>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia</p>
          <p className={Styles.service_info}><IoLogoWhatsapp size={24} /> <span>Whatsapp: 0853 1111 1010</span></p>
        </div>
      </div>
      <div className={Styles.term}>
        <p>Kebijakan Privasi
          •
          Syarat dan Ketentuan
        </p>
        <p>©2020-2022 Pijar Mahir. All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer

