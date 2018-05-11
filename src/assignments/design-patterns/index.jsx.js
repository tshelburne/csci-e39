import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import Alert from './support/alert.jsx'
import Button from './support/button.jsx'
import ActionBar from './support/action-bar.jsx'


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
				<Example title="Alert Component">

					<Alert title="This is a big deal error." subtitle="Do not ignore me." type="error">
						<ActionBar placement="right">
							<Button title="Learn More" type="transparent" link="google.com">
							</Button>
						</ActionBar>
					</Alert>

					<Alert title="I'm just warnin ya." subtitle="You can proceed as you wish." type="warning">
						<ActionBar placement="right">
							<Button title="OK" type="transparent" link="google.com">
							</Button>
						</ActionBar>
					</Alert>

					<Alert title="This is an info alert." subtitle="Just kinda wanted to let you know something." type="info">
					</Alert>

					<Alert title="Cha ching." subtitle="You did somethin good, nice work." type="success">
					</Alert>

				</Example>

				<Example title="Button Component">

					<Button title="Primary" type="primary" link="google.com">
					</Button>

					<Button title="Secondary" type="secondary" link="google.com">
					</Button>

					<Button title="Disabled" type="disabled" link="google.com">
					</Button>

					<Button title="Link" type="link" link="google.com">
					</Button>

				</Example>

				<Example title="Action Bar Component">
					<ActionBar placement="left">
						<Button title="save" icon="fas fa-save" type="primary" link="google.com"></Button>
						<Button title="cancel" icon="fas fa-times" type="link" link="google.com"></Button>
					</ActionBar>
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