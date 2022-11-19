import React from 'react';
import Styles from './Button.module.css';

function Button({ buttonType, buttonNav, children, btnOnClick }) {
  return (
    <button onClick={btnOnClick} className={`${buttonType ? Styles.button_primary : Styles.button_secondary}` + ` ${buttonNav && Styles.nav_button}`}>
      {children}
    </button>
  );
}

export default Button
