import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import { Card, PlayingCard } from './components/card'
import Image from './components/image'
import Button from './components/button'

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
			<div className="style-guide">
				<h1>Design Patterns</h1>

				<Example
					title="Versatile placeholder image"
					componentName="<Image>"
					description={
						<div>
							<p>Insert placeholder images from a variety of providers by referencing the subject and size desired. You must pass in one of the following string values as <code>subject</code>:</p>
							<ul>
								<li><code>kitten</code></li>
								<li><code>bacon</code></li>
								<li><code>murray</code></li>
								<li><code>cage</code></li>
								<li><code>bear</code></li>
								<li><code>zombie</code></li>
								<li><code>beard</code></li>
							</ul>
							<p> The <code>subject</code> will be used as alt text unless you pass in a separate <code>alt</code> property. If you fail to pass in a <code>subject</code> or pass in an invalid value, a placeholder image will remind you to do so.</p>
							<p> The numeric <code>height</code> and <code>width</code> properties will default to 150px unless another value is specified.</p>
						</div>}>

					<Image subject="kitten" width="100" height="200"/>
					<Image subject="cage" width="300" height="200" alt="Nicholas Cage"> </Image>
					<Image subject="bacon" width="200" height="200"> </Image>
					<Image></Image>
					<Image subject="cat"> </Image>

				</Example>

				<Example title="Button"
					componentName="<Button>"
					description={
						<div>
							<p>A versatile button component can be used for lots of stuff.</p>
							<p>The <code>style</code> property accepts <code>light</code> or
							<code>dark</code> (default) as strings and affects the button color.</p>
							<p>To set an associated action, you may:</p>
							<ul>
								<li>pass in as <code>onClick</code> a function available in the
								component from which you call the <code>Button</code> component </li>
								<li>pass in a string <code>alertMessage</code> that will be alerted
								when the button is clicked.</li>
								<li> do nothing and your button will alert "You clicked me!"</li>
							</ul>
						</div>
					}>
					<Button text="Click me!" style="light"></Button>
					<Button text="Say hello" style="dark" alertMessage="hello"></Button>
				</Example>

				<Example title="Reusable cards"
					componentName="<Card>"
					description={
						<div>
						<p>A versatile card component can be used for lots of stuff.</p>
						</div>
					}>
					<Card title="Mittens the Kitten"
						description="Mittens loves playing with yarn and chasing laser pointers."
						image= {{
							subject: "kitten",
							height: "200",
							width: "200",
							alt: "Mittens"
						}}
						button = {{
							text: "Speak",
							alertMessage: "Meow"
						}}
						>
					</Card>
					<Card title="Super Sam"
						description="Sam is a superhero. His superpower is invisibility, which means he's also very good at evading the paparazzi, and he has no photo."
						>
					</Card>

					<PlayingCard
						title="Bill Murr"
						image={{
							subject: "murray",
							height: "200",
							width: "200",
							alt: "Bill Murray"
						}}
						description="Bill Murray is an actor. You probably already knew that."
					></PlayingCard>

					<PlayingCard
						title="Zombie"
						image={{
							subject: "zombie",
							height: "200",
							width: "200",
						}}
						description="Zombies like to eat brains. Watch out!!!"
						patterned
					></PlayingCard>

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
