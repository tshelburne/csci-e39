import React from 'react'

const Button = ({label, extraClass, onClick}) =>

<button className={`button ${extraClass}` } onClick={onClick}> {label}</button>

export const PrimaryButton = ({label, onClick}) =>
<Button label={label} extraClass="primary" onClick={onClick}  />

PrimaryButton.displayName = `PrimaryButton`

export const DefaultButton = ({label, onClick}) =>
<Button label={label} extraClass="default" onClick={onClick} />

DefaultButton.displayName = `DefaultButton`

