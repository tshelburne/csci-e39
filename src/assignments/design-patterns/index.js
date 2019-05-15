import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Card from './components/card'
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

					<Image subject="kitten" width="100" height="200"> </Image>
					<Image subject="cage" width="300" height="200" alt="Nicholas Cage"> </Image>
					<Image subject="bacon" width="200" height="200"> </Image>
					<Image></Image>
					<Image subject="cat"> </Image>

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
							text: "Flip"
						}}
						>
					</Card>
					<Card title="Sam"
						description="Sam has no photo :("
						>
					</Card>
				</Example>



				<Example title="Button"
					componentName="<Button>"
					description={
						<div>
						<p>A versatile button component can be used for lots of stuff.</p>
						</div>
					}>
					<Button text="Click me!" style="light"></Button>
					<Button text="Flip Card" style="dark"></Button>
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
