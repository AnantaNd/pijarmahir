import React from 'react';
import Styles from './Button.module.css';

function Button({ buttonType, buttonNav, children, btnOnClick, type }) {
  return (
    <button onClick={btnOnClick} className={`${buttonType ? Styles.button_primary : Styles.button_secondary}` + ` ${buttonNav && Styles.nav_button}`} type={type}>
      {children}
    </button>
  );
}

export default Button
