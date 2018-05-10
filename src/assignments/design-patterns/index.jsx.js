import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Example from './support/example.jsx'
import ToggleButton from './support/toggleButton.jsx'
import Button from './support/button.jsx'
import Toggle from './support/toggle.jsx'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)
		autobind(this)

		this.playSound = this.playSound.bind(this);
		this.sayHello = this.sayHello.bind(this);

		this.state = {
			activeCode: `react`,
			selectedSound: 'rimshot'
		}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	getSound(option) {
		this.setState({selectedSound: option})
	}

	sayHello() {
		console.log("Hello!");
	}

	playSound(sound) {
		console.log(sound);
	}


	render() {
		const toggleOptions = ["A", "AB", "B"]
		const soundToggles = ["rimshot", "bassdrum", "handclap"]

		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="ToggleButton">
					<ToggleButton color="red"></ToggleButton>
					<ToggleButton color="orange"></ToggleButton>
					<ToggleButton color="yellow"></ToggleButton>
					<ToggleButton color="white"></ToggleButton>
				</Example>

				<Example title="Toggle">
					<Toggle name="white" color="white"></Toggle>
					<Toggle name="grey" color="grey" options={ toggleOptions } selectedOption="AB"></Toggle>
					<Toggle name="black" color="black"></Toggle>
				</Example>

				<Example title="Button">
					<Button label="Alright" action={this.sayHello}></Button>
				</Example>

				<section>
					<Toggle options={ soundToggles } selectedOption="rimshot" getOption={ this.getSound }></Toggle>

					<Button label="Play Sounds" action={() => this.playSound(this.state.selectedSound)}></Button>
				</section>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary