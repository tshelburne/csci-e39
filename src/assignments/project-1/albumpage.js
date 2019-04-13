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
				<AlbumDescription paragraphs={[FIRSTPARAGRAPH, SECONDPARAGRAPH, THIRDPARAGRAPH]} />
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
				<FaqDescription faqs={[FIRSTFAQ, SECONDFAQ, THIRDFAQ, FOURTHFAQ, FIFTHFAQ, SIXTHFAQ, SEVENTHFAQ, EIGHTHFAQ]} />
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

const THIRDPARAGRAPH = {
	header: "Don't forget to check out my FAQ page...",
	header_class: "content_header",
	text: "I created an FAQ page that answers questions posed to myself... by myself... The FAQ uses state to selectively render content. There were some experimental classType features I could not figure out so it is not exactly how the examples were but still uses state.",
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

const SIXTHFAQ = {
	question: "Does anything bother you with what you did?",
	question_class: "faq_question2",
	answer: "I think that index.js is not really needed as it is just a container for the albumpage content but I didn't really know what to do to maximize efficiency. Working is good enough for now I guess... :)",
	answer_class: "faq_answer2",
}

const SEVENTHFAQ = {
	question: "What did you do for part 2 of this project?",
	question_class: "faq_question1",
	answer: "I created an FAQ page (this page) and also enabled the user to add a description to be used as alt text. This can be done on each individual file after uploading.",
	answer_class: "faq_answer1",
}

const EIGHTHFAQ = {
	question: "How many components did you create?",
	question_class: "faq_question1",
	answer: "I created six (6). They are: album, albumdescription, albumpage, faqdescription, sectionheader, and updater. Album renders the lists of completed or pending files. Albumdescription and faqdescription are very similar and provide content. Albumpage is a container component of sorts (not sure if that is a thing) but I created it so I could use state to render different views. Sectionheader is a simple content component. Updater uses updateFile method to add description to be used as alt text.",
	answer_class: "faq_answer1",
}

export default AlbumPage