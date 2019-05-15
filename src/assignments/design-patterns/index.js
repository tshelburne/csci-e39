import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import './app.scss'
//import Datepicker from './components/cal-datepicker';
import ProgressBar from './components/progressBar';
import    ScoreButton, { TouchDownScoreButton, TennisScoreButton } from './components/scoreButton' //trying out * 
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
				<h1>Sports Tracker Library</h1>
				<h2>Basic Usage </h2>
				<p>
					This library is a set of components meant to be used to help when building a web page that displays the stats
and progress for in progress or replays of your favorite sports like Football, Basketball or Hockey. </p>

				<Example title="Score Button" >
					<p>
						This is a basic example of the Score Button component. Placing it on a website will yield a button with a starting
score of 0 and pressing it will increment by 1. </p>
					<ScoreButton />
					<h4>Setting the Starting Number</h4>
					<p>
						If a game is already in progress or the page has been refreshed in the middle of a game,
						simply pass the current starting score into the button's "startingScore" property. Subsequent presses will result
						in an increment of the score starting from that number.
				</p>
					<p>
						Passing in  a score of 65 will start the example button from that number.
				</p>
					<ScoreButton startingScore="65" />
					<h4>Adjusting the Increment</h4>
					<p>
						To adjust the increment of the number based on the scoring model of the sport,
						 add an "increment" property to the component. The example below shows an increment of 5.
				</p>
					<ScoreButton startingScore="99" increment="5" />
				<h4>Scoring Tennis Matches</h4>
				<p>Looking to keep score on a tennis match? Simply add a "TennisScoreButton" and the default properties will be set. 
					Note: This uses the 15 point scoring method with game point resetting the score to 0.</p>
					< TennisScoreButton/>
<h4>Score Touchdowns</h4>
					<p>The ultimate goal of football is to score a touchdown. Now you can score a few yourself with a 
					 "TouchDownScoreButton" button.
						 </p>
						 <TouchDownScoreButton /> 
	
				</Example>
				<Example title="Game Progress Bar">

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