
import PropTypes from 'prop-types';
import React, { Component } from 'react';

function Input ({ labelText, labelPosition, inputType, inputName }) {
    var labelCSS = (labelPosition == "top") ? "label-top" : "label-left";
    var divCSS = (labelPosition == "top") ? "div-top" : "div-left";
    
    return (
        <div className={divCSS}>
        <label htmlFor={inputName} className={labelCSS}>{labelText}</label>
            <input type={inputType} name={inputName}></input>
        </div>
    )
}

Input.defaultProps = {
    labelPosition: 'top',
    inputType: 'text'
};

Input.propTypes = { 
    labelText:PropTypes.string.isRequired,  
    inputName:PropTypes.string.isRequired,
    labelPosition:PropTypes.oneOf(['top', 'left']),
    inputType:PropTypes.oneOf(['text', 'email', 'number'])
  };

export default Input