import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({block, primary, secondary, ...props}) => {

	const classes = cx(`button`, {
		'mod-block': block,
		'mod-primary': primary,
		'mod-secondary': secondary,
	})
	return <button {...props} className={classes}/>
}

Button.propTypes = {
	block: PropTypes.bool,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
}

export default Button

export const ButtonGroup = ({children, ...props}) => 
	<div {...props} className="button-group">{children}</div>

export const ConfirmButton = (props) => 
	<Button {...props} primary secondary={false} />

export const CancelButton = (props) => 
	<Button {...props} secondary primary={false} />