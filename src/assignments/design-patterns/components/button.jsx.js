import React from 'react'

const Button = ({label, extraClass, onClick}) => <button className={`button ${extraClass}`} onClick={onClick}>{label}</button> 

export const SuccessButton = ({label, onClick}) => <Button label = {label} onClick={onClick} extraClass="success" />

SuccessButton.displayName = `SuccessButton`

export const CancelButton = ({label, onClick}) => <Button label = {label} onClick={onClick} extraClass="cancel" />

CancelButton.displayName = `CancelButton`
