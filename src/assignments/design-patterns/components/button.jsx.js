import React from 'react'


const Button = ({text, styleClass, onClick}) =>
	<button className = {`button ${styleClass}`} onClick = {onClick}>{text}</button>

export const SaveButton = ({text, onClick}) =>
	<Button text = {text} onClick = {onClick} styleClass = "save"/>


export const DeleteButton = ({text, onClick}) =>
	<Button text = {text} onClick = {onClick} styleClass = "delete"/>


