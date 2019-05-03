import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import ImageCard from './components/ImageCard'
import Section from './components/Section'
import { EmailLink, Link } from './components/Links'


import './app.scss'



const peopleImages = [{ imgUrl: "https://picsum.photos/300", imgAlt: "placeholder person", cardContent: `<Link linkText="Example Text Link" title="An existing placeholder page" linkAddress="https://example.com/" newTab blockDisplay />` },
{ imgUrl: "https://picsum.photos/300", imgAlt: "placeholder person", cardContent: "placeholder content" },
{ imgUrl: "https://picsum.photos/300", imgAlt: "placeholder person", cardContent: "placeholder content" }];

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
				<h1>Create Kit Patterns</h1>

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


				<Example title="Section">
					<Section title="Section Heading" styleName="box-padding dark-mode">
						<p>The styleName attribute takes one or more CSS class name.
							In this case the classes add padding to the section and set a dark color scheme.
						</p>
					</Section>
				</Example>

				<Example title="Links">
					<Link linkText="Example Text Link" title="An existing placeholder page" linkAddress="https://example.com/" newTab blockDisplay />
					<EmailLink linkText="emaillink@example.com" title="This email does not exist" emailAddress="example@example.com" blockDisplay />
				</Example>

				<Example title="Putting It All Together">
					<Section title="Meet Our Team" styleName="box-padding">
						<ul class="vertical-image-card-list">
							<ImageCard imgSrc="https://placeimg.com/400/400/people" imgAlt="placeholder person" vertical>
								<h3>A. Someone</h3>
								<Link linkText="A. Someone's Website" linkAddress="https://example.com/" newTab blockDisplay />
								<EmailLink linkText="asomeone@example.com" title="This email does not exist" emailAddress="asomeone@example.com" blockDisplay />
							</ImageCard>

							<ImageCard imgSrc="https://placeimg.com/407/407/people" imgAlt="placeholder person" vertical>
								<h3>B. Someone</h3>
								<Link linkText="B. Someone's Website" linkAddress="https://example.com/" newTab blockDisplay />
								<EmailLink linkText="bsomeone@example.com" emailAddress="bsomeone@example.com" blockDisplay />
							</ImageCard>

							<ImageCard imgSrc="https://placeimg.com/405/405/people" imgAlt="placeholder person" vertical>
								<h3>C. Someone</h3>
								<Link linkText="C. Someone's Website" linkAddress="https://example.com/" newTab blockDisplay />
								<EmailLink linkText="csomeone@example.com" emailAddress="csomeone@example.com" blockDisplay />
							</ImageCard>


						</ul>

					</Section>
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