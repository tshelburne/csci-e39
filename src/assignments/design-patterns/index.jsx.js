import React from 'react'
import PropTypes from 'prop-types'
import Pattern from './support/pattern.jsx'

import {PrimaryButton, SecondaryButton} from './support/button.jsx'
import Image from './support/Image.jsx'

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
				<h1>Living Style Guide</h1>

				<Pattern title="<Button /> component with versions">
					<PrimaryButton label="Primary Button" onClick={() => alert('Primary Button')} />
					<SecondaryButton label="Secondary Button" onClick={() => alert('Secondary Button')} />
				</Pattern>
				
				<Pattern title="<Image /> component with properties">
		        	<Image onClick={()=> {window.open('https://cdn.pbrd.co/images/HhcxXlT.jpg','_blank')} } file= {{id: 1, name: 'Mt.jpg', url: 'https://cdn.pbrd.co/images/Hh2cnaR.jpg', error: false,}}/>
				</Pattern>

				<Pattern title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
				</Pattern>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary
