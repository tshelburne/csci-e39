import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import ImageCard from './components/ImageCard'
import ThreeUpLayout from './components/ThreeUpLayout'

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

				<Example title="Simple Image Card">

					<ImageCard imgSrc="https://via.placeholder.com/300" imgAlt="place holder image" />

				</Example>

				<Example title="Horizontal Image Card With Additional Content">
					<ImageCard imgSrc="https://via.placeholder.com/500" imgAlt="place holder image">
						<p>
							You can insert any type of content in this image card. In this case it has two paragraphs.
						</p>
						<p>
							Content items will center vertically, and stack on top of each other.
						</p>
					</ImageCard>
				</Example>


				<Example title="Vertical Image Card With Additional Content">
					<ImageCard imgSrc="https://via.placeholder.com/500" imgAlt="place holder image" vertical>
						<p>
							You can insert any type of content in this image card. In this case it has two paragraphs.
						</p>
						<p>
							Content items will stack on top of each other.
						</p>
					</ImageCard>
				</Example>

				<Example title="Three Up Layout">

					<ThreeUpLayout>
						<img src="https://via.placeholder.com/500" alt="place holder image" />
						<p>
							This layout has one column in mobile screens, 2 in tablet screens, and 3 in laptop and desktop screens.

						</p>
						<img src="https://via.placeholder.com/500" alt="place holder image" />
					</ThreeUpLayout>

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