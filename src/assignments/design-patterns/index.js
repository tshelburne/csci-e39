import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import Button from './components/button'
import Picture from './components/picture'
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
					<p>The Heading library can be used to select different size of headings in the application, and keep the heading style consistent for the headings across the application.</p>
					<ol>
						<Heading title="H1: Hello" />
						<HeadingH2 title="H2: Hello" />
						<HeadingH3 title="H3: Hello" />
						<HeadingH4 title="H4: Hello" />
					</ol>
				</Example>

				<Example title="Basic <Button>">
					<Button name="Basic Button" id="submit" />
				</Example>

				<Example title="Random <Picture>">
					<div className="item-card">
						<Picture src="http://lorempixel.com/100/200/" alt="Random Picture" />
					</div>
				</Example>

				<Example title="Refresh <Picture>">
					<HeadingH4 title="Random Picture" />
					<div className="item-card">
						<Picture src="http://lorempixel.com/100/200/" alt="Random Picture" />
					</div>
					<Button name="Refresh" id="submit" onClick={() => { this.Picture.forceUpdate() }}/>
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