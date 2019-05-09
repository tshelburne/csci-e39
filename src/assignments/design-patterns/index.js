import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Button from './components/button';

import './app.scss'
import './styles/main.scss'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	render() {
		return (
			<div className="style-guide">
				<h1>Etienne's Pattern Library!</h1>

				<Example title="My Special Button Component">
					<Button onClickMessage="Component taking props">Etienne's Button Component</Button>
					<Button onClickMessage="Secondary button">Secondary Button Component</Button>
				</Example>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary