import React from 'react'

const Button = ({label, buttonAction, onClick}) =>
	<button className ={`button ${buttonAction}`} onClick={onClick}>{label}</button>

export const BiggerText = ({label, onClick}) =>
	<Button label={label} onClick={onClick} buttonAction="bigger" />
BiggerText.displayname = 'BiggerText'

export const SmallerText = ({label, onClick}) =>
	<Button label={label} onClick={onClick} buttonAction="smaller" />
SmallerText.displayname = 'SmallerText'

export const ResetText = ({label, onClick}) =>
	<Button label={label} onClick={onClick} buttonAction="reset" />
ResetText.displayname = 'ResetText'