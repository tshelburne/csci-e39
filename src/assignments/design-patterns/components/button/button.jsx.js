import React from 'react';

const Button = ({ label, extraClass, onClick }) => {
	return (
		<button className={`button ${extraClass}`} onClick={onClick}>
			{label}
		</button>
	);
};

export const PrimaryButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="primary" onClick={onClick}>
			{label}
		</Button>
	);
};

PrimaryButton.displayName = `PrimaryButton`;

export const SecondaryButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="secondary" onClick={onClick}>
			{label}
		</Button>
	);
};

SecondaryButton.displayName = `SecondaryButton`;

export const SuccessButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="success" onClick={onClick}>
			{label}
		</Button>
	);
};

SuccessButton.displayName = `SuccessButton`;

export const DangerButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="danger" onClick={onClick}>
			{label}
		</Button>
	);
};

DangerButton.displayName = `DangerButton`;

export const WarningButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="warning" onClick={onClick}>
			{label}
		</Button>
	);
};

WarningButton.displayName = `WarningButton`;

export const InfoButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="info" onClick={onClick}>
			{label}
		</Button>
	);
};

InfoButton.displayName = `InfoButton`;

export const LightButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="light" onClick={onClick}>
			{label}
		</Button>
	);
};

LightButton.displayName = `LightButton`;

export const DarkButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="dark" onClick={onClick}>
			{label}
		</Button>
	);
};

DarkButton.displayName = `DarkButton`;

export const LinkButton = ({ label, onClick }) => {
	return (
		<Button label={label} extraClass="link" onClick={onClick}>
			{label}
		</Button>
	);
};

LinkButton.displayName = `LinkButton`;
