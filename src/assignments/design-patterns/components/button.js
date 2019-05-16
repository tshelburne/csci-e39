import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { name, onClick, className } = props;
    console.log(props)

    return (
        <button onClick={() => onClick()} className={className ? `${className}` : 'styled-button'}>
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