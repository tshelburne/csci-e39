import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { name, onClick, className } = props;

    return (
        <button onClick={() => onClick()} className={'button' + className ? ` ${className}` : ''}>
            {name}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.function,
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Button;