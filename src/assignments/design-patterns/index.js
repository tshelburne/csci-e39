import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import './app.scss' 
//import Datepicker from './components/cal-datepicker';
import ProgressBar from './components/progressBar'; 
import ScoreButton from './components/scoreButton'
import Clock, { ClockArea, ClockDate, ClockTime } from './components/clock'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = { activeCode: `react` }
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({ activeCode }),
		}
	}
	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>
				<Example title="Score Button" >


				<ScoreButton   />
				<ScoreButton startingCount="1000"/>
					<ScoreButton startingCount="99" increment="5" />

				</Example> 
				<Example title="Progress Bar">
					  
					<ProgressBar progress="33" ></ProgressBar>
				</Example>
				<Example title="Clock">
					<ClockArea>
						<ClockDate></ClockDate>
						<ClockTime></ClockTime>
					</ClockArea>

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