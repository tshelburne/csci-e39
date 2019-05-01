import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import ImageCard from './components/ImageCard'

import './app.scss'

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
				<h1>My Pattern Library!</h1>

				<Example title="Image Card">

					<ImageCard imgSrc="https://via.placeholder.com/300" imgAlt="place holder image" />

				</Example>

				<Example title="Image Card with Side Content">

					<ImageCard imgSrc="https://via.placeholder.com/300" imgAlt="place holder image">
						<p>
							I can insert any type of content in my image card. In this case I have inserted two paragraphs.
						</p>
						<p>
							Content items will center vertically, and stack on top of eachother.
						</p>
					</ImageCard>

				</Example>



				<Example title="My Special <span>">
					<span className="just-testing">HELLO SPAN</span>
				</Example>

				<Example title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
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