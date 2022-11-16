import React from 'react';
import Styles from './Button.module.css';

function Button({ buttonType, children }) {
  return (
    <button className={buttonType ? Styles.button_primary : Styles.button_secondary}>
      {children}
    </button>
  );
}

export default Button
