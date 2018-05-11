import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import {SuccessButton, CancelButton} from './components/button.jsx'
import LoginForm from './components/loginform.jsx'
import UnorderedList from './components/unorderedlist.jsx'


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

				<Example title = "<Button />">
					<SuccessButton label = "You Succeed! Now Click to Proceed" onClick = {() => alert ('SUCCESS')}/>
					<CancelButton label = "Click to Quit" onClick = {() => alert ('Failure')}/>
				</Example>

				<Example title = "<LoginForm />">
					<LoginForm formName = "login-form" loginUrl="login.php" methodType="post"/>
				</Example>

				<Example title = "<UnorderedList />">
					<UnorderedList items={[{"name":"London"}, {"name":"Paris"}, {"name":"Vienna"} ]}/>
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