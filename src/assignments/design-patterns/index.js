import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Header2 from './components/header2'
import Card from './components/card'
import './app.scss'
import './components/card.scss'
import {CloseButton, LimitedToggleButton ,DiceButton } from './components/buttons.js'
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

				<h1>Aram Comjean Pattern Library</h1>

				<Header2 headingText="CSCI-e39, Spring 2019"/>
				<CloseButton button_text="X"> </CloseButton>








				<Example title="My Card with Image">
					<Card heading="One Card" label="Bill Murray!" image_url="https://www.fillmurray.com/300/300" > Child Html..</Card >
				</Example>

				<Example title="My Card no Image">
					<Card heading="One Card" label="No Bill Murray Imaage" > Child Html..</Card >
				</Example>


				<Example title="<LimitedToggleButton> sets state on or off, for up to 4 clicks.">
					<LimitedToggleButton > </LimitedToggleButton>
				</Example>


				<Example title="<DiceButton>. Click to roll.  Defaults to six sides. Click again to re-roll">
					Click to roll.  Click again to re-roll
					<hr/>
					<DiceButton ></DiceButton>
				</Example>

				<Example title="<DiceButton>. Click to roll.  Set to 4 sides">
					<DiceButton dice_sides="4" > </DiceButton>
				</Example>

				<Example title="<ColorCard>. Generate RGB based Random Colors.">
					<ColorCard></ColorCard>
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