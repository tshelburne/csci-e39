import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, children, type}) => {
  return (
    <button className={`btn btn-${type ? type : 'default'}`}
    disabled={disabled}
    onClick={onClick}>    
    {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

export default Button;

