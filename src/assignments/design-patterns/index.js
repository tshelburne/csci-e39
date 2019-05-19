import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

//import ReactDOM from 'react-dom';
import Button from './components/button'
import Picture from './components/picture'
import Toggle from './components/toggle'
import Heading, {HeadingH2, HeadingH3, HeadingH4} from './components/heading'


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
				<HeadingH2 title="My Pattern Library!" />

				<Example title="Constant <Heading>">
					<p>The Heading component can be used to select different size of headings in the application.</p>
					<ol>
						<Heading title="H1: Hello" />
						<HeadingH2 title="H2: Hello" />
						<HeadingH3 title="H3: Hello" />
						<HeadingH4 title="H4: Hello" />
					</ol>
				</Example>

				<Example title="Basic <Button>">
					<p>The Button component can be used to style a basic button and also pass onClick as a prop.</p>
					<Button name="Button" id="submit" />
				</Example>

				<Example title="Random <Picture>">
					<p>The Picture component can be used to style a item-card.</p>
					<Picture src="http://lorempixel.com/100/150/" alt="Name" />
				</Example>

				<Example title="Toggle <Picture>">
					<p>The Toggle component uses Heading, Button and Pitcure components together.</p>
					<Toggle src="http://lorempixel.com/100/150/" alt="Name" title="Heading"/>
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