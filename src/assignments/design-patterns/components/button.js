import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
    const { onClickMessage, handleClick } = props;

    return (
        <button className="button" onClick={() => alert(onClickMessage)}>{props.children}</button>
    )
}

export const ButtonFunction = (props) => {
    const { handleClick } = props;

    return (
        <button className="button" onClick={handleClick}>{props.children}</button>
    )
}

Button.propTypes = {
    onClickMessage: PropTypes.string
}

ButtonFunction.propTypes = {
    handleClick: PropTypes.func
}