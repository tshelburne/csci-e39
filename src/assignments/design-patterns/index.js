import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'

import ImageCard from './components/ImageCard'
import Section from './components/Section'
import { EmailLink, Link } from './components/Links'

import './app.scss'


const peopleList = [
	{
		img: "https://placeimg.com/400/400/people",
		name: "A. Person", website: "https://www.aperson.com",
		email: "aperson@example.com"
	},

	{
		img: "https://placeimg.com/450/450/people",
		name: "B. Someone", website: "https://www.bsomeone.com",
		email: "bsomeone@example.com"
	},

	{
		img: "https://placeimg.com/300/300/people",
		name: "C. Persona", website: "https://www.cpersona.com",
		email: "cpersona@example.com"
	}
]


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
					<EmailLink linkText="emaillink@example.com" title="An example email placeholder" emailAddress="example@example.com" blockDisplay />
				</Example>

				<Example title="Putting It All Together">
					<Section title="Meet Our Team" styleName="box-padding">
						<ul className="vertical-image-card-list">
							{peopleList.map((person, id) => {
								const { img, name, email, website } = person;
								const websiteName = website.replace(/^https?:\/\//, '');

								return (
									<li key={id}>
										<ImageCard imgSrc={img} imgAlt={name} vertical>
											<h3>{name}</h3>
											<Link linkText={websiteName} linkAddress={website} newTab blockDisplay />
											<EmailLink linkText={email} emailAddress={email} blockDisplay />
										</ImageCard>
									</li>)
							})}
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