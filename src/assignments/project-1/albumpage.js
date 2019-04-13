import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Uploader from '../../ui/components/uploader'
import SectionHeader from './sectionheader'
import Updater from './updater'
import Album from './album'
import AlbumDescription from './albumdescription'
import FaqDescription from './faqdescription'

class AlbumPage extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {faqActive: false};
	}

	toggleFaq() {
		this.setState({faqActive: !this.state.faqActive})
	}

	render() {
		const buttonText = this.state.faqActive ? 'View Albums' : 'View FAQ';
		const {faqActive} = this.state

		const {actions, pendingFiles, completedFiles, ...inputProps} = this.props
		return <>
			<button onClick={this.toggleFaq.bind(this)}>{buttonText}</button>
			{!faqActive && <>
				<SectionHeader tag="h1" sectiontext="My Project 1 Album"/>
				<AlbumDescription paragraphs={[FIRSTPARAGRAPH, SECONDPARAGRAPH]} />
				<SectionHeader tag="h1" sectiontext="Upload Images"/>
				{/* do not delete this uploader component */}
				<Uploader className="file-form" upload={actions.upload} />
				{/* do not delete this uploader component */}

				{/* Display PendingFiles Header and List */}
				<SectionHeader tag="h2" sectiontext="In Progress"/>
				<Album isPendingFiles={true} photos={pendingFiles} updateFile={actions.files.updateFile}/>

				{/* Display CompletedFiles Header and List */}
				<SectionHeader tag="h2" sectiontext="Completed"/>
				<Album isPendingFiles={false} photos={completedFiles} updateFile={actions.files.updateFile}/></>
			}
			{faqActive && <>
				<SectionHeader tag="h1" sectiontext="My FAQs"/>
				<FaqDescription faqs={[FIRSTFAQ, SECONDFAQ, THIRDFAQ, FOURTHFAQ, FIFTHFAQ]} />
				</>}
		</>
	}

}

const FIRSTPARAGRAPH = {
	header: "This is my content header...",
	header_class: "content_header",
	text: "This album is my first attempt at using Reactjs. As you will probably see, I still need lots of help with React. I will attempt to pass this paragraph data from many items into the uploader index file. I will also pass in some simple class information into the react component.",
	text_class: "paragraph_text",
}

const SECONDPARAGRAPH = {
	header: "This is the second header content...",
	header_class: "content_header",
	text: "This is the second paragraph that I am attempting to write. The images that I am using for this shown below are randomly found on my local computer so they might not make any sense.",
	text_class: "paragraph_text",
}

const FIRSTFAQ = {
	question: "Why did you create this album?",
	question_class: "faq_question1",
	answer: "It was required for the assignment.",
	answer_class: "faq_answer1",
}

const SECONDFAQ = {
	question: "What were some strange errors you observed with this assignment?",
	question_class: "faq_question1",
	answer: "Support for the experimental syntax 'classProperties' isn't currently enabled",
	answer_class: "faq_answer1",
}

const THIRDFAQ = {
	question: "What was the motivation or inspiration for your choice of photos in this album?",
	question_class: "faq_question1",
	answer: "Well... Many of the photos that are locally on my computer are screenshots of my company's products, images used to make content used in my company's platform, or competitive information.",
	answer_class: "faq_answer1",
}

const FOURTHFAQ = {
	question: "What is an item you would like to have improved?",
	question_class: "faq_question2",
	answer: "I could have combined the faq/album description components as they are very similar...",
	answer_class: "faq_answer2",
}

const FIFTHFAQ = {
	question: "What is another item you would like to have improved?",
	question_class: "faq_question2",
	answer: "I struggled getting the placeholder text in the form inputs to vertically center.",
	answer_class: "faq_answer2",
}

export default AlbumPage