import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Example from './support/example.jsx'
import ToggleButton from './support/toggleButton.jsx'
import Button from './support/button.jsx'
import Toggle from './support/toggle.jsx'
import Light from './support/light.jsx'

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

	sayHello() {
		console.log("Hello!");
	}

	getSound(option) {
		this.setState({selectedSound: option})
	}

	playSound() {
		if(this.state.selectedSound === 'rimshot') {
			var url = require('./sounds/rimshot.wav')
		} else if(this.state.selectedSound === 'bassdrum') {
			var url = require('./sounds/bassdrum.wav')
		} else if(this.state.selectedSound === 'handclap') {
			var url = require('./sounds/handclap.wav')
		}

		var audio = new Audio(url)

		audio.play()
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

					<div>
						<Light name="Rim Shot" active={(this.state.selectedSound === 'rimshot' ? true : false)}></Light>
						<Light name="Bass Drum" active={(this.state.selectedSound === 'bassdrum' ? true : false)}></Light>
						<Light name="Hand Clap" active={(this.state.selectedSound === 'handclap' ? true : false)}></Light>
					</div>

					<Button label="Play Sounds" action={() => this.playSound()}></Button>
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