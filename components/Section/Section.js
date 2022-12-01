import React from 'react';
import Styles from './Section.module.css';

function Section({ id, children }) {
  return (
    <section className={Styles.container} id={id}>
      {children}
    </section>
  )
}

export default Section
