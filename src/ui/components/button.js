import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
    // wrap items
    const { name, onClick } = props;

    return (<button onClick={() => onClick()}>{name}</button>);
}

Button.propTypes = {
    onClick: PropTypes.function,
    name: PropTypes.string.isRequired
}

export default Button;