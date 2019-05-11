import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { onClickMessage, handleClick } = props;
    
    return (
        <button className="button" onClick={handleClick ? handleClick : () => alert(onClickMessage)}>{props.children}</button>
    )
}

Button.propTypes = {
    onClickMessage: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;