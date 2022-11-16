import React from "react";
import Styles from "./Layouts.module.css";

function Layouts({ children }) {
  return (
    <main className={Styles.main}>
      {children}
    </main>
  );
}

export default Layouts;
