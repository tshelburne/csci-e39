import React from 'react'

/* button components from project 1
   code below follow Tim Shelburne's class video, April 2018 */

const Button = ({label, buttonClass, onClick}) => 
	<button className={buttonClass} onClick={onClick}>{label}</button>

export const BasicButton = ( {label, onClick} ) => 
	<Button label={label} onClick={onClick} buttonClass="basic-button" />

export const UploadButton = ( {label, onClick} ) => 
	<Button label={label} onClick={onClick} buttonClass="upload-button" />