import React from 'react';

const Button = ({text, type, onClick, classes }) => (
  <button type={type} className={classes} onClick={onClick}>
    {text}
  </button>
);

export default Button

export const SubmitButton = ({onClick}) => (
	<Button text="Submit" type="submit" classes="button-std button-primary" onClick={onClick} />
	);

export const CancelButton = ({onClick}) => (
	<Button text="Cancel" type="submit" classes="button-std button-warning" onClick={onClick} />
	);