import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import '../app.scss';

function ButtonGroup() {

	const button1 = 'button 1';
	const button2 = 'button 2';
	const button3 = 'button 3';

	return <div className='button-group'>
		<button className='button-with-arrow'>{button1}</button>
		<button className='button-with-arrow'>{button2}</button>
		<button className='button-with-arrow'>{button3}</button>
	</div>;
}

export default ButtonGroup;