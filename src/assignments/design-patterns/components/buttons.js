import React from 'react'
import PropTypes from 'prop-types'

import '../app.scss';

const submitButtonText = 'submit';
const showButtonText = 'show icon';
const onClickEvent = 'ToggleVisibility(small-balloon-icon)';

export class SubmitButton extends React.Component {

    render(){
      return (
		    <button className='button-submit'>{submitButtonText}</button>
      );
    }
}

export class ShowButton extends React.Component {

    render(){
      return (
        // I don't know how to make this work. It has something to do with state, and I'm probably not calling the function properly...
		    <button className='button-show' onclick='{onClickEvent}'>{showButtonText}</button>
      );
    }
}