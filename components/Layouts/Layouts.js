import React from "react";
import Footer from "../Footer/FooterMain/Footer";
import Navbar from "../Navbar/Navbar";
import Styles from "./Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layouts;
