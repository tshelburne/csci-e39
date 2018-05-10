import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

export class Button extends React.Component {
	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {link, name, onClick, active, ...inputProps} = this.props;
		
		return <button {...inputProps} className={'button '+(active ? 'buttonactive' : 'buttoninactive')} onClick={onClick}>
    {name}
    </button>
	}
}

Button.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export const PrettyButton = ({link,name,onClick,active, ...inputProps}) =>
    <Button link={link} name={name} onClick={onClick} active={active} style={{backgroundColor: '#fccdd3'}} />