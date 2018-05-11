import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {InfoMessage, AlertMessage, ErrorMessage, SuccessMessage} from './components/messages.jsx'
import {Button, GhostButton} from './components/button.jsx'
import {Image} from './components/image.jsx'
import {Card} from './components/card.jsx'
import {Banner} from './components/banner.jsx'
import {Search} from './components/search.jsx'
import {TagDefault, TagFeatured, TagNew} from './components/tags.jsx'

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
				<header>
					<h1>Parsemmon UI Kit</h1>
					<h2>A Free React UI Pattern Library</h2>
				</header>

				<Example title="Alert Messages" description="This component allows you to display four types of messages: informative messages, alert messages, success messages, and error messages. Use these components for form validations, shopping cart alerts, breaking news flashes, and more." tags="<InfoMessage>, <AlertMessage>, <SuccessMessage>, and <ErrorMessage>">
					<InfoMessage message="This is an informative message." />
					<AlertMessage message="This is an alert message." />
					<SuccessMessage message="This is a success message." />
					<ErrorMessage message="This is an error message." />
				</Example>

				<Example title="Buttons" description="Two button types are generated: a default button with props for the link text and redirecting url of the button, plus a ghost button with the transparent background and stroke treatment of a ghost button." tags="<Button>, <GhostButton>">
					<Button linkText="Default Button" url='http://google.com' />
					<GhostButton linkText="Ghost Button" url='http://google.com' />
				</Example>

				<Example title="Images" description="A single image to use in conjunction with other components." tags="<Image>">
					<Image link="http://www.leisyvidal.com/img/grid3.jpg" alt='Caption of this Image' />
				</Example>

				<Example title="Cards" description="The card component uses the image and button components above to create a simple card with a title, body text, a button, and an image. Cards can be used to list team members, blog posts, a directory of users, and more." tags="<Card>">
					<div className='card-container'>
						<Card title="First Card" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." btnText="A Button" btnUrl="http://google.com" image='http://www.leisyvidal.com/img/grid3.jpg' imageAlt='An alt caption example'/>
						<Card title="Second Card" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." btnText="A Button" btnUrl="http://google.com" image='http://www.leisyvidal.com/img/grid3.jpg' imageAlt='An alt caption example'/>
						<Card title="Third Card" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." btnText="A Button" btnUrl="http://google.com" image='http://www.leisyvidal.com/img/grid3.jpg' imageAlt='An alt caption example'/>
					</div>
				</Example>

				<Example title="Banner" description="A full width banner section with a heading, paragraph, and call to action. You can edit the title, body text and background image." tags="<Banner>">
					<Banner title="Banner Title" body="This is a paragraph inside of a banner." backgroundImg='http://www.leisyvidal.com/img/home1.jpg'/>
				</Example>

				<Example title="Search Bar" description="A single search bar with a search button." tags="<Search>">
					<Search placeholder='search the site...' btnText='Search' />
				</Example>

				<Example title="Tags" description="This component can be used to tag blog posts, cards, messages, and more as default, featured, and new." tags="<TagDefault>, <TagFeatured>, <TagNew>">
					<TagDefault tag='Default Tag'/>
					<TagFeatured tag='Featured Tag'/>
					<TagNew tag='New Tag'/>
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
