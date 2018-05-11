import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import SVG from './components/SVG/SVG.jsx'
import Picture from './components/Picture/Picture.jsx'
import Button from './components/Button/Button.jsx'

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
				<h1 style={{textAlign: 'center', fontFamily:'Permanent Marker'}}>{"Joanna's Pattern Library!"}</h1>
				<h2 style={{textAlign: 'center'}}>{"Created for CSCI E-39 Spring Semester 2018"}</h2>
				
				{/* //TODO
				// Create a reuseable SVG component
				// handleFunction = activateRainbowDance()
				// iconName = close, open, shut, add, delete, edit
				// < SVG icon="iconName" color="colorName" onClick="handleFunction()" label=""/> */}
				
				<Example title="SVG Icon Set">
  				<SVG icon="close" color="mediumpurple" width="21" height="21"/>
  				<SVG icon="delete" color="deeppink" width="21" height="21"/>
  				<SVG icon="edit" color="aqua" width="21" height="21"/>
  				<SVG icon="add" color="deepskyblue" width="21" height="21"/>
  				<SVG icon="open" color="black" width="21" height="21"/>
  				<SVG icon="shut" color="coral" width="21" height="21"/>
				</Example>
				
				{/* // Create a reuseable Picture component
        // theme creates a backgroundColor and sets transparency on image, maybe other blending layers as well?  
				// <Picture url="link/to/image" theme="dark/light/normal" alt="" />
				
				// Create a reuseable <Dropdown /> component
				// <Dropdown theme="light/dark" label=""> {child items ul} </Dropdown>
				
				// Create a Dropdown that contains an SVG and a Picture with a menu below it 
				// <Dropdown>
				// <Picture url="path/to/image" theme="dark" />
				// <SVG iconName="open" color="mediumpurple" onclick="slideInDropdown()" label="Open Dropdown" />
				// {child items ul}
				// </Dropdown>
				
				*/}

				<Example title="Button Set">
				<Button className="button button--primary">
				  Primary Button
				</Button>
					<button className="button button--secondary">Secondary Button</button>
					<button className="button button--primary--subtle">Subtle Primary Button</button>
					<button className="button button--secondary--subtle">Subtle Secondary Button</button>
					<button className="button button--primary button--disabled">Disabled Primary Button</button>
					<button className="button button--secondary button--disabled">Disabled Secondary Button</button>
				</Example>
				
				<Example title="Card">
					<div className="card">
					  <header>
					    <h1>Card Title</h1>
					   </header>
					  <h2>Card Subtitle</h2>
					  <p>Card contextual text</p>
					</div>
				</Example>

				<Example title="Picture">
					<Picture url="https://loremflickr.com/320/240" caption="Checkout this cool photo!" width="50%"/>
				</Example>
				
				<Example title="Combining Elements to create a Component">
					<p>Card, Picture, Button, SVG all together</p>
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