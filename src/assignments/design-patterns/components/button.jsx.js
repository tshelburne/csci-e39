import React from 'react'

const Button = ({label, extraClass, onClick}) =>
	<button className={'button ${extraClass}'} onClick={onClick}>{label}</button>

export const SuccessButton = ({label, onClick, extraClass}) =>
	<Button label={label} onClick={onClick} extraClass='success'></Button>

SuccessButton.displayName = 'SuccessButton'

export const CancelButton = ({label, onClick}) =>
	<Button label={label} onClick={onClick} extraClass='cancel'></Button>

CancelButton.displayName = 'CancelButton'
