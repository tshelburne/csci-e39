import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Navbar from './components/nav'
import {ButtonStyle} from './components/button'

import './app.scss'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args);

		this.state = {activeCode: `react`};
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		};
	}

	render() {
		return (
			<div className="style-guide">
				<h1>UI Patterns!</h1>

				<Example title="Button">
					<ButtonStyle />
				</Example>

				<Example title="My Navigation">
					<Navbar />
				</Example>

				<Example title="My Button <button>">
					<button className="button-primary">PRIMARY</button>
				</Example>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>

				<Example title="My Special <span>">
					<span className="just-testing">HELLO SPAN</span>
				</Example>

				<Example title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
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