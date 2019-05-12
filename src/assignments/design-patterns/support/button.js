import React from 'react';

const Button = ({text, type, onClick, disabled, classes }) => (
  <button type={type} disabled={disabled} className={classes} onClick={onClick}>
    {text}
  </button>
);

export default Button