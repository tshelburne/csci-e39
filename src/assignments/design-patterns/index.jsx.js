import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import Message from './Message.jsx'
import Ad from './Ad.jsx'
import Thumbnails from './Thumbnails.jsx'

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
		const randomGraphic = "https://picsum.photos/300/200/?image=";
		const randomLink = "http://www.uroulette.com/visit/wvvvv";

		const images = 
			[
				{id: "001", name: "Image 1", description: "Description of image 1", url: "https://picsum.photos/300/200/?image="},
				{id: "002", name: "Image 2", description: "Description of image 2", url: "https://picsum.photos/300/200/?image="},
				{id: "003", name: "Image 3", description: "Description of image 3", url: "https://picsum.photos/300/200/?image="},
				{id: "004", name: "Image 4", description: "Description of image 4", url: "https://picsum.photos/300/200/?image="},
				{id: "005", name: "Image 6", description: "Description of image 5", url: "https://picsum.photos/300/200/?image="},
				{id: "006", name: "Image 6", description: "Description of image 6", url: "https://picsum.photos/300/200/?image="},
			]

		return (
			<div className="style-guide">
				<h1>Michael Regert's Pattern Library</h1>

				<h2 className="section-subheading">Components from Project 2</h2>
				<Example title="Message <Message>">
					<Message id="id" text="message text here" key="key" textColor="#FF0000" member="Id12345" visibility="true"></Message>
				</Example>

				<Example title="Advertisement <Ad>">
					<Ad graphic={randomGraphic + Math.floor(Math.random() * 20) } buttonLink={randomLink} borderColor='#000000' textColor='#FF0000'/>
				</Example>

				<h2 className="section-subheading">Composite React Components</h2>
				<Example title="Thumbnails with CSS Grid <Thumbnails>">
					<Thumbnails images={images} useGridView="true"/>
				</Example>

				<Example title="Thumbnails with List <Thumbnails>">
					<Thumbnails images={images} useGridView="false"/>
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