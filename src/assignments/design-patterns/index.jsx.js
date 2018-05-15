import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {HelloButton, ByeButton} from './components/js/button.jsx.js'
import {Switch} from './components/js/toggle.jsx.js'
import {Field} from './components/js/form.jsx.js'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {
			activeCode: `react`,
			hello: false,
			bye: false,
			checked: false,
		}

		this.onHelloClick = this.onHelloClick.bind(this);
		this.onByeClick = this.onByeClick.bind(this);

	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	onHelloClick(e) {
		this.setState({ hello: !this.state.hello})
	}

	onByeClick(e) {
		this.setState({ bye: !this.state.bye})
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="My <button>">
					<HelloButton label={this.state.hello ? 'Salutations' : 'Hello'} onClick={this.onHelloClick} />
					<ByeButton label={this.state.bye ? 'Adieu' : 'Goodbye'} onClick={this.onByeClick} />
				</Example>

				<Example title="My <toggle>">
					<Switch defaultChecked={true} />
				</Example>

				<Example title="My <form>">
					<Field label="Search" />
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
