import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import CompletedFilesItem from './components/completedFilesItem.jsx.js'

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
		const CompletedFilesItemFile = {
			id:"1", 
			name:"example image", 
			url: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4", 
			error: "", 
			updatedAt: "1525968000000",
		}

		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>
				
				<Example title="CompletedFilesItem">
					<CompletedFilesItem file={CompletedFilesItemFile} />
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