
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input'

function Signup ({buttonText, labelPosition, labelText}) {
    
    
    return (
        <form className="newsletter-signup" submit=''>
        <Input inputType="email" labelPosition={labelPosition} labelText={labelText} inputName="emailAddress"></Input>
        <button>{buttonText}</button>
        </form>
    )
}

Signup.defaultProps = {
    buttonText: 'Sign up!',
    labelPosition: 'top',
    labelText: "Signup for our newsletter!"
};

Signup.propTypes = { 
    buttonText:PropTypes.string, 
    labelPosition:PropTypes.oneOf(['top', 'left']),
    labelText:PropTypes.string
  };

export default Signup