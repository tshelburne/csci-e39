import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {PrimaryButton, DefaultButton} from './support/components/button.jsx'
import Progress from './support/components/progressbar.jsx'
import Card from './support/components/card.jsx'
import Changer from './support/components/changer.jsx'

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
				<Example title="Primary <button>">
					<PrimaryButton label="this is a primary button" onClick={() => alert('SUCCESS!')} />
				</Example>
				<Example title="Default button <button>">
					<DefaultButton label="this is a default button" onClick={() => alert('SUCCESS!')} />
				</Example>
				<Example title="Progressbar <progress>">
					<Progress value="35" extraClass="simple"/>
				</Example>
				<Example title="Card <card>">
					<Card imageLink="source.unsplash.com" imageSize="300x400" imageCategory="food" className="thumbnail" altText="sample image"/>
				</Example>
				<Example title="Three things play together (type in to change image category ex:food, people, nature, crazy)">
					<Changer/>
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