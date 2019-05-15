import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import {SubmitButton, ShowButton, ShowBalloonIcon} from './components/buttons'
import ButtonGroup from './components/buttonGroup'
import BalloonIcon from './components/balloonIcon'
import SmallBalloonIcon from './components/smallBalloonIcon'
import ToggleVisibility from './components/ToggleVisibility'

import './app.scss'

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
			<div className='style-guide balloon-border'>
				<h1>My Pattern Library!</h1>
				
				<Example title='My Special Interactive Icon'>

						<SmallBalloonIcon>Press the [show icon] button below.</SmallBalloonIcon>

				</Example>

				<Example title='My Special Buttons'>

						<SubmitButton></SubmitButton>

						<ShowButton></ShowButton>

				</Example>

				<Example title='My Special Button Group'>

						<ButtonGroup></ButtonGroup>

				</Example>

				<Example title='My Special Icon'>

						<BalloonIcon></BalloonIcon>

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