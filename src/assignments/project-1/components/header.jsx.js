import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Intro from './introtext.jsx'

class Header extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
  	const {text, ...inputProps} = this.props
		return <header>
		<h1>PicSteal</h1>
		<Intro text={text}/>
		</header>
	}

}

export default Header