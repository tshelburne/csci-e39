import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Header from './components/header'

import './sass/app.scss'

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

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>

				</Example>

				<Example title="My Special <span>">
					<span className="just-testing">HELLO SPAN</span>
				</Example>

				<Example title="My Special <h4>">
					<Header className="just-testing" HELLO HEADING />
					<Header name="Me" greeting= "Yay" />
					<Header name="World" greeting="Hello" special />
				</Example>

				<Example title="Login">


					<div className="app-title">
						<h1>Login</h1>
					</div>

					<div className="login-form">
					<div className="login">
					<div className="login-screen">

					<div className="control-group">
					<input type="text" className="login-field" value="" placeholder="username" id="login-name" />
					<label className="login-field-icon fui-user" for="login-name"></label>
					</div>

					<div className="control-group">
					<input type="password" className="login-field" value="" placeholder="password" id="login-pass" />
					<label className="login-field-icon fui-lock" for="login-pass"></label>
					</div>

					<a className="btn btn-primary btn-large btn-block" href="#">login</a>
					<a className="login-link" href="#">Lost your password?</a>
					</div>
					</div>
					</div>

				</Example>

				<Example title="My Special <span>">


				
					<span className="just-testing">HELLO SPAN</span>
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