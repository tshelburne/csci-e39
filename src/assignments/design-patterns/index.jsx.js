import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import {BasicButton, UploadButton} from './components/button.jsx.js'
import {Card} from './components/card.jsx.js'

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
				
				<Example title="<BasicButton /> " >
					<BasicButton label="basic button" onClick={() => alert("Click me to initiate activity")}/>
				</Example>

				<Example title="<UploadButton />" >
					<UploadButton label="upload button" onClick={() => alert("Click me to upload a file")}/>
				</Example>

				<Example title="<Card />">
					<Card  altText="Sample" title="Card Sample Title" descriptiveText="Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there's no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That's something else. Looks like we're coming up on Alderaan. You know, I did feel something. I could almost see the remote. That's good. You have taken your first step into a larger world." linkDestination="#" /> 
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