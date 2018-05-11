import React from 'react'

const Btn = ({url, linkText, btnStyle}) =>
	<a href={url} className={btnStyle}>{linkText}</a>

export const Button = ({linkText, url, btnStyle}) =>
	<Btn url={url} linkText={linkText} btnStyle='button'></Btn>

Button.displayName = 'Button'

export const GhostButton = ({linkText, url, btnStyle}) =>
	<Btn url={url} linkText={linkText} btnStyle='button ghost'></Btn>

GhostButton.displayName = 'GhostButton'
