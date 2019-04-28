import React from 'react';

const Button = ({text, type, onClick, disabled, buttonType }) => (
  <button type={type} disabled={disabled} className={buttonType} onClick={onClick}>
    {text}
  </button>
);

export default Button