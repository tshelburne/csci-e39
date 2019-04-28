import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import SectionHeader from './support/sectionheader'
import FaqDescription from './support/faqdescription'
import Menu from './support/menu'
import Button from './support/button'

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
					<Button text='Primary' type='submit' buttonType="button-primary" onClick={()=>{}} />
					<Button text='Success' type='submit' buttonType="button-success" onClick={()=>{}} />
					<Button text='Warning' type='submit' buttonType="button-warning" onClick={()=>{}} />
				</Example>

				<Example title="My Special <SectionHeader>">
					<SectionHeader tag="h1" sectiontext="My FAQs"/>
				</Example>

				<Example title="My Special <FaqDescription>">
					<FaqDescription faqs={FAQS} />
				</Example>

				<Example title="My Special <menu>">
					<Menu menuItems={MENUITEMS}/>
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

const MENUITEMS = [
	{
		name: "Home",
		url: "/home",
	},
	{
		name: "Avatars",
		url: "/avatars",
	},
	{
		name: "Members",
		url: "/members",
	},
	{
		name: "Login",
		url: "/login",
	},
]

export default PatternLibrary