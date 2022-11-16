import React from 'react';
import Styles from './Input.module.css';

function Input({ label, type, name, placeholder }) {
  return (
    <div className={Styles.container_input}>
      <label className={Styles.label_input} htmlFor={name}>{label}</label>
      <input className={Styles.input} name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
