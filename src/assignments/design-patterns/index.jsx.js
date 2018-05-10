import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import Button from './support/button.jsx'
import Toggle from './support/toggle.jsx'

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

	sayHello() {
		console.log("Hello!");
	}

	render() {
		const toggleOptions = ["A", "AB", "B"]

		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>

				<Button color="red"></Button>
				<Button color="orange" action={this.sayHello}></Button>
				<Button color="yellow"></Button>
				<Button color="white"></Button>

				<Toggle name="white" color="white"></Toggle>
				<Toggle name="grey" color="grey" options={ toggleOptions } selectedOption="AB"></Toggle>
				<Toggle name="black" color="black"></Toggle>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary