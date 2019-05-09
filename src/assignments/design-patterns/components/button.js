import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { onClickMessage } = props;

    return (
        <button className="button" onClick={() => alert(onClickMessage)}>{props.children}</button>
    )
}

Button.propTypes = {
    onClickMessage: PropTypes.string
}

export default Button;