import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Header from './components/nav'
import {ButtonGroup, ButtonStandard} from './components/button'
import {ImageButton} from './components/imagebutton'
import {ButtonStyled} from './components/styledbutton'
import Footer from './components/footer'

import './app.scss'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args);

		this.state = {activeCode: `react`};
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		};
	}

	render() {
		return (
			<div className="style-guide">
				<h1>UI Patterns</h1>
				<i>With Material UI</i>

				<Example title="Image Buttons">
				<ImageButton/>
				</Example>


				<Example title="Styled Button">
					<ButtonStyled name="Styled Button"/>	
				</Example>

				

				<Example title="Buttons">
					<ButtonGroup title ="group" />
					<br></br>
					
					<ButtonStandard primary> PRIMARY BASIC </ButtonStandard>
					<ButtonStandard secondary block> SECONDARY BASIC </ButtonStandard>
					<ButtonStandard disabled> DISABLED BASIC </ButtonStandard>
				</Example>

				<Example title="Header">
					<Header />
				</Example>
				<Example title="Footer">
					<Footer />
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