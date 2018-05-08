import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import {BasicButton, UploadButton} from './components/button.jsx.js'

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
				
				<Example title="My <BasicButton /> " >
					<BasicButton label="basic button" onClick={() => alert("Click me to initiate activity")}/>
				</Example>

				<Example title="My <UploadButton />" >
					<UploadButton label="upload button" onClick={() => alert("Click me to upload a file")}/>
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