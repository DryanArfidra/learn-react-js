import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'default', ...props }) => {
  const buttonClassName = 
    variant === 'primary' 
      ? `${styles.button} ${styles.primary}` 
      : styles.button;

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;