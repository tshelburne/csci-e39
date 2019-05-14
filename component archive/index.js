import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import './app.scss'
import Icon from './components/icons'
import Section from './components/section'
import TextBox from './components/textbox'
//import Datepicker from './components/cal-datepicker';
import ProgressBar from './components/progress-bar';
import Button, { ButtonGroup, ConfirmButton, CancelButton } from './components/buttons'
import CountButton from './components/count-button'
import Clock, { ClockArea,ClockDate,ClockTime} from './components/clock'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = { activeCode: `react` }
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({ activeCode }),
		}
	}
	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>
				<Example title="Count Button" >
					<CountButton startingCount="99"> 
					</CountButton>
				</Example>
				<Example title="My Test" >
					<ButtonGroup>
						<ConfirmButton>OK</ConfirmButton>
						<CancelButton>Back</CancelButton>
					</ButtonGroup>
				</Example>
				<Example title="Progress Bar">
					<ProgressBar progress="33"></ProgressBar>
				</Example>
				<Example title="Clock">
				<ClockArea> 
					<ClockDate></ClockDate>
				<ClockTime></ClockTime>
				</ClockArea>
				
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