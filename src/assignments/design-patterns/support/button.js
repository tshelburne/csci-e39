import React from 'react';

const Button = ({text, onClick, type, disabled, buttonType }) => (
  <button type={type} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);

export default Button