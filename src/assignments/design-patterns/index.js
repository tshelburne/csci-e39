import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import ImageCard from './components/ImageCard'
import ImageCardList from './components/ImageCardList'
import Section from './components/Section'


import './app.scss'

const images = [{ imgUrl: "https://picsum.photos/300", imgAlt: "cute cat placeholder", cardContent: "placeholder content" },
{ imgUrl: "https://picsum.photos/300", imgAlt: "cute cat placeholder", cardContent: "placeholder content" },
{ imgUrl: "https://picsum.photos/300", imgAlt: "cute cat placeholder", cardContent: "placeholder content" }]

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

					<ImageCard imgSrc="https://picsum.photos/300" imgAlt="place holder image" />
				</Example>

				<Example title="Horizontal Image Card With Additional Content">
					<ImageCard imgSrc="https://picsum.photos/300" imgAlt="place holder image">
						<p>
							You can insert any type of content in this image card. In this case it has two paragraphs.
						</p>
						<p>
							Content items will center vertically, and stack on top of each other.
						</p>
					</ImageCard>
				</Example>

				<Example title="Vertical Image Card With Additional Content">
					<ImageCard imgSrc="https://picsum.photos/550" imgAlt="place holder image" vertical>
						<p>
							You can insert any type of content in this image card. In this case it has two paragraphs.
						</p>
						<p>
							Content items will stack on top of each other.
						</p>
					</ImageCard>
				</Example>

				<Example title="Image Card List">

					<ImageCardList itemList={images} />

				</Example>

				<Example title="Section">
					<Section title="Section Heading" styleName="text-center">
						<p>The styleName attribute takes a CSS class name.
							In this case the class centers the text in the section.
						</p>
					</Section>
				</Example>

				<Example title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
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