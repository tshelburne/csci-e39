import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Header2 from './components/header2'
import Card from './components/card'
import './app.scss'
import './components/card.scss'
import {CloseButton, ToggleButton ,DiceButton } from './components/buttons.js'
import {ColorCard, RadomButton} from './components/color_randomizer.js'
function twoalert(one,two){
	alert(one +'- '+two);
}
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

				<Header2 headingText="two"/>
				<CloseButton button_text="X"> </CloseButton>
				<ToggleButton></ToggleButton>
				<DiceButton dice_sides="4"></DiceButton>


				<RadomButton onChange={twoalert}></RadomButton>

				<ColorCard></ColorCard>

				<Example title="My Card with Image">
					<Card heading="One Card" label="Bill Murray!" image_url="https://www.fillmurray.com/300/300" > Child Html..</Card >
				</Example>

				<Example title="My Card no Image">
					<Card heading="One Card" label="No Bill Murray Imaage" > Child Html..</Card >
				</Example>

				<Example title="<ToggleButton> sets state on or off">
					< ToggleButton > < /ToggleButton >
				</Example>

				<Example title="<DiceButton>. Click to roll.  Defaults to six sides.">
					<DiceButton ></DiceButton>
				</Example>

				<Example title="<DiceButton>. Click to roll.  Set to N sides!">
					<DiceButton dice_sides="4" > </DiceButton>
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