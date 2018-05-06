import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {SaveButton, DeleteButton} from './components/button.jsx'
import Footer from './components/navigation.jsx'
import {ThumbNail, GalleryImage} from './components/image.jsx'


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
				<h1 className = "title">My Pattern Library!</h1>

				<Example title = "<Image />">
					<ThumbNail src = "https://www.w3schools.com/tags/smiley.gif" alt = "image alt"/>
					<GalleryImage src = "https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/grinning-face_1f600.png" alt = "another image alt"/>
				</Example>


				<Example title = "<Button />">
					<SaveButton text = "Click to Save" onClick = {()=> alert('Entry was saved!')}/>
					<DeleteButton text = "Click to Delete" onClick = {()=> alert('Warning, you are about to delete!')}/>
				</Example>

				<Example title = "<Footer />">
					<Footer item1= "Google" item2 ="Facebook" item3="Twitter"/> 
					<Footer item1= "Articles" item2 ="Contact Us" item3="Press"/>
				</Example>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
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