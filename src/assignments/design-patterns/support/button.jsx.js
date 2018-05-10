import React from 'react'

const Button = ({ label, extraClass, onClick }) =>
	<button className={`button ${extraClass}`} onClick={onClick}>{label}</button>

export const PrimaryButton = ({ label, onClick }) =>
	<Button label={label} extraClass="primary" onClick={onClick}>{label}</Button>

PrimaryButton.displayName = `PrimaryButton`;

export const SecondaryButton = ({ label, onClick }) =>
	<Button label={label} extraClass="secondary" onClick={onClick}>{label}</Button>

SecondaryButton.displayName = `SecondaryButton`;