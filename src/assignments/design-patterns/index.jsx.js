import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

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
				<h1>{"Joanna's Pattern Library!"}</h1>
				<h2>{"Created for CSCI E-39 Spring Semester 2018"}</h2>
				
				{/* //TODO
				// Create a reuseable SVG component
				// handleFunction = activateRainbowDance()
				// iconName = close, open, shut, add, delete, edit
				// < SVG icon="iconName" color="colorName" onClick="handleFunction()" label=""/> */}
				
				<Example title="SVG icon set">
				<svg width="21px" height="21px" viewBox="0 0 21 21" style={{stroke: 'mediumpurple'}}>
          <g id="close-symbol">
              <g id="Group-3" transform="translate(10.646447, 10.353553) rotate(45.000000) translate(-10.646447, -10.353553) translate(-4.353553, -4.146447)">
                  <path d="M15,0.666666667 L15,28.8492424"></path>
                  <path d="M15.2071068,0.357864376 L15.2071068,28.6421356" transform="translate(15.000000, 14.500000) rotate(90.000000) translate(-15.000000, -14.500000) "></path>
              </g>
          </g>
        </svg>
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