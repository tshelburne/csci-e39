import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return <button className={props.button_cls} onClick={props.button_fxn}>{props.button_text}</button>
}

export default Button

export const SecondaryButton = (props) => 
    <Button button_cls="secondary-button" button_fxn={props.button_fxn} button_text={props.button_text} />

Button.PropTypes = {
    button_text: PropTypes.string.isRequired,
    button_fxn: PropTypes.func
}