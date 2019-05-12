import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import SectionHeader from './support/sectionheader'
import FaqDescription from './support/faqdescription'
import Menu from './support/menu'
import Button, {SubmitButton, CancelButton} from './support/button'
import TextBlock from './support/textblock'
import Slider from './support/slider'
import Section from './support/section'

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
				<h1>My Pattern Library!</h1>

				<Example title="My Special <Button>">
					<Button text='Primary' type='submit' classes="button-std button-primary" onClick={()=>{}} />
					<br></br>
					<Button text='Success' type='submit' classes="button-std button-success" onClick={()=>{}} />
					<br></br>
					<Button text='Warning' type='submit' classes="button-std button-warning" onClick={()=>{}} />
					<br></br>
					<SubmitButton onClick={()=> alert('Submitted!')} />
					<br></br>
					<CancelButton onClick={()=> alert('Cancelled!')} />
				</Example>

				<Example title="My Special <SectionHeader>">
					<SectionHeader tag="h1" sectiontext="My h1 Section Header"/>
					<SectionHeader tag="h2" sectiontext="My h2 Section Header"/>
					<SectionHeader tag="h3" sectiontext="My h3 Section Header"/>
				</Example>

				<Example title="My Special <TextBlock>">
					<TextBlock classes="text-block1">
						<p>
							This is a very simple component that allows the user to pass in text inside HTML tags as the component uses children.
							The styling can be passed into the component using classes.
						</p>
  					</TextBlock>
  					<TextBlock classes="text-block2">
						<p>
							I initially tried to implement a code block but that proved to be very difficult.
							There are a lot of reserved words in code that have difficulty rendering and cause many errors in this code.
							Lots of characters would need to be escaped so I took the easy way out and just created a text block. This text block
							uses a monospaced font family in the styling to make it look like a code block but this is not code.... :)
						</p>
  					</TextBlock>
				</Example>

				<Example title="My Special <FaqDescription>">
					<FaqDescription faqs={FAQS} />
				</Example>

				<Example title="My Special <Menu>">
					<Menu menuItems={MENUITEMS1} classes="menu-item1"/>
					<br></br>
					<Menu menuItems={MENUITEMS2} classes="menu-item2"/>
					<br></br>
					<Menu menuItems={MENUITEMS3} classes="menu-item3"/>
				</Example>

				<Example title="My Special <Slider>">
					<Slider sliderType="Range" min="1" max="100" />
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-round slider-bar-size-small slider-thumb-small"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-round slider-bar-size-small slider-thumb-medium"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-round slider-bar-size-small slider-thumb-large"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-primary slider-round slider-bar-size-small slider-thumb-small"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-primary slider-round slider-bar-size-small slider-thumb-medium"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-primary slider-round slider-bar-size-small slider-thumb-large"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-secondary slider-bar-size-small slider-thumb-small"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-secondary slider-bar-size-small slider-thumb-medium"/>
					<br></br>
					<Slider sliderType="Range" min="1" max="100" classes="slider slider-thumb-secondary slider-bar-size-small slider-thumb-large"/>
				</Example>

				<Example title="My Special Combined Example">
					<Section sectionClass="combined-example">
						<SectionHeader tag="h1" sectiontext="The First Section"/>
						<TextBlock classes="example-text-block">
							<p>
								This is a text block within a section placed underneath a section header. This seems like extra work here to make
								a text block component over just a paragraph?
							</p>
  						</TextBlock>
  					<SectionHeader tag="h1" sectiontext="The Second Section"/>
  						<TextBlock classes="example-text-block">
							<p>
								This is another text block with a section placed under a section header. It seems like it would be more efficient
								to just put the text as &#123;children&#125; but that is not allowed.
							</p>
  						</TextBlock>
  					<SectionHeader tag="h2" sectiontext="Button Subsection"/>
						<TextBlock classes="example-text-block">
							<p>
								Another text block under an h2 section header. This text will preceed a button.
							</p>
  						</TextBlock>
  						<Button text='Example Button' type='submit' classes="button-std button-center button-width-wide button-primary" onClick={()=>{}} />
  						<TextBlock classes="example-text-block">
							<p>
								Some more filler text in a text block underneath the button. I have been wondering how the button above should
								be positioned within the section. Should it be left justified or centered? Should this control be within the
								button or outside? I ended up putting control in the button using css and altering the margin.
							</p>
  						</TextBlock>
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

const FAQS = [
	{
		question: "Why did you create this album?",
		question_class: "faq_question1",
		answer: "It was required for the assignment.",
		answer_class: "faq_answer1",
	},
	{
		question: "What were some strange errors you observed with this assignment?",
		question_class: "faq_question1",
		answer: "Support for the experimental syntax 'classProperties' isn't currently enabled",
		answer_class: "faq_answer1",
	},
	{
		question: "What was the motivation or inspiration for your choice of photos in this album?",
		question_class: "faq_question1",
		answer: "Well... Many of the photos that are locally on my computer are screenshots of my company's products, images used to make content used in my company's platform, or competitive information.",
		answer_class: "faq_answer1",
	},
]

const MENUITEMS1 = [
	{
		name: "Home",
		url: "#home",
	},
	{
		name: "Avatars",
		url: "#avatars",
	},
	{
		name: "Members",
		url: "#members",
	},
	{
		name: "Login",
		url: "#login",
	},
]

const MENUITEMS2 = [
	{
		name: "Home",
		url: "#home",
	},
	{
		name: "News",
		url: "#news",
	},
	{
		name: "About",
		url: "#about",
	},
	{
		name: "Blog",
		url: "#blog",
	},
	{
		name: "Contact",
		url: "#contact",
	},
]

const MENUITEMS3 = [
	{
		name: "Home",
		url: "#home",
	},
	{
		name: "News",
		url: "#news",
	},
	{
		name: "About",
		url: "#about",
	},
	{
		name: "Contact",
		url: "#contact",
	},
]

export default PatternLibrary