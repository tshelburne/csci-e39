import React from 'react'
import PropTypes from 'prop-types' 
import Example from './support/example' 
import './app.scss'
//import Datepicker from './components/cal-datepicker';
import GameProgressBar from './components/gameProgressBar';
import ScoreButton, { TouchDownScoreButton, TennisScoreButton } from './components/scoreButton' //trying out * 
import Clock, { ClockArea, ClockDate, ClockTime, GameClock } from './components/clock'

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>My Pattern Library!</h1>

			<Example title="My Special <div>">
				<div className="just-testing">HELLO DIV</div>
			</Example> 
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
				This library is a set of components meant to be used when building a web app that displays the stats and progress for a live or replay sports game such as Tennis, Football, Basketball or Hockey. They all make use of state and can provide interaction. Also the included SCSS contains glows and animations, perfect for the cool sports app look.</p>

				<Example title="Score Button" >
					This is a basic example of the Score Button component. Placing it on a website will yield a button with a starting score of 0 and pressing it will increment by 1.
				<ScoreButton />
					Setting the Starting Number: If a game is already in progress or the page has been refreshed in the middle of a game, simply pass the current starting score into the button's "startingScore" property. Subsequent presses will result in an increment of the score starting from that number.Passing in  a score of 65 will start the example button from that number.
				<ScoreButton startingScore="65" />
					Adjusting the Increment: To adjust the increment of the number based on the scoring model of the sport, add an "increment" property to the component. The example below shows an increment of 5.
				<ScoreButton startingScore="99" increment="5" />
					Scoring Tennis Matches: Looking to keep score on a tennis match? Simply add a "TennisScoreButton" and the default properties will be set. Note: This uses the 15 point scoring method with game point resetting the score to 0.
				<TennisScoreButton />
					Score Touchdowns: The ultimate goal of football is to score a touchdown. Now you can score a few yourself with a "TouchDownScoreButton" component.
				<TouchDownScoreButton />
					

				</Example>
				<Example title="Game Progress Bar">
					Are you looking to track how far you are into a timed game? Use the "GameProgressBar" component.
					It will increment the time in seconds. When the progress reaches the limit, it will reset and start over.
					By default, the progress value maxes out at 200 seconds.
					<GameProgressBar />
					Starting point: Already in the middle of a game?
					To set a specific amount of progress, add a "progress" attribute with a number value. This will start the progress at the number specified. The example below starts at 100 seconds.
					<GameProgressBar progress="100" />
					Max time: To set the game's max time in seconds, add the tag "gameLengthSeconds" which takes a number representing
					the total length of the game or match in seconds. The example below maxes out at 180 seconds.
					<GameProgressBar gameLengthSecond="180" />
					Test mode: to test out the progress bar, simply put it into test mode by populating the "test" property with any value. This will provide a button to add progress in 15 second increments. 
					<GameProgressBar test="True"/>

				</Example>
				<Example title="Clock">
					Keep time while tracking the game: add a clock component to your app. 
					Start with the "ClockArea" component to provide an area. Optionally the "text" property will provide a label inside:
					<ClockArea text="Example Clock area" />
					To add the clock inside of the Clock Area, add a "ClockTime" tag inside. This will display the current local time with seconds.
					<ClockArea text="Current Time"><ClockTime /></ClockArea>
					To also show the date, you can include a "ClockDate" tag inside of the Clock Area:
					<ClockArea text="Current Date" ><ClockDate /></ClockArea>
					To display all components in one tag, you can simply add a "GameClock" tag. Note: this does not require any parameters:
					<GameClock />
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