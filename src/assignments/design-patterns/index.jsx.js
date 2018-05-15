import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {MainCard, OtherCard} from './components/card.jsx'
import ProgressBar from './components/progress-bar.jsx'

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

				<Example title="My Progress bars">
					<ProgressBar heading="Normal" type="normal"/>

					<ProgressBar heading="Success" type="success"/>
				</Example>

				<Example title="My card components">
					<MainCard/>

					<OtherCard/>
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