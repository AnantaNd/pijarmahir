import React from 'react';
import Styles from './Button.module.css';

function Button({ buttonType }) {
  return (
    <button className={buttonType == 'primary' ? Styles.button_primary : Styles.button_secondary}>
      {children}
    </button>
  );
}

export default Button
