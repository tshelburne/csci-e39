import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {SuccessButton, CancelButton} from './components/button.jsx'
import {SingleCard} from './components/card.jsx'
import {GeneralMessage, ErrorMessage, SuccessMessage} from './components/messages.jsx'

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

				<Example title="Buttons" description="Regular and ghost buttons" tags="<SuccessButton>, <CancelButton>">
					<SuccessButton label="ClickMe" onClick={()=>alert('Success')} />
				</Example>

				<Example title="Cards" description="Cards" tags="<SingleCard>">
					<SingleCard title="My Card" body="Card body here" buttonText="Click Me" buttonUrl="http://google.com" />
				</Example>

				<Example title="Messages" description="Messageas to display errors." tags="<SuccessMessage>, <GeneralMessage> and <ErrorMessage>">
					<GeneralMessage title="GeneralMessage" message="This is a general Message." />
					<SuccessMessage title="Success" message="Sucessfully submitted form." />
					<ErrorMessage title="Error" message="Error Submitting form." />
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
