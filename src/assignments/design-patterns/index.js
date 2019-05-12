import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Header2 from './components/header2'
import Card from './components/card'

import './app.scss'
import './components/card.scss'

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

				<h1>My Pattern Library!</h1>

				<Header2 headingText="two"/>




				<Example title="My Special <div>">
					<Card heading="One Card" label="Bill Murray" image_url="https://www.fillmurray.com/300/300" > Children..</Card>
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