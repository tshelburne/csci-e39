import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import CompletedFilesItem, {CompletedFilesItemExamples} from './components/completedFilesItem.jsx.js'

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

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>
				
				<Example title="CompletedFilesItem">
					<CompletedFilesItem file={CompletedFilesItemExamples.one} />
				</Example>

				<Example title="CompletedFilesItem Error">
					<CompletedFilesItem file={CompletedFilesItemExamples.error} />
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