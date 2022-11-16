import React from "react";
import Navbar from "../Navbar/Navbar";
import Styles from "./Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        {children}
      </main>
    </>
  );
}

export default Layouts;
