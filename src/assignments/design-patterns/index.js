import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Footer from './support/footer'
import Header from './support/header'
import Toggle from './support/toggle'

import './app.scss'
import './footer.scss'
import './header.scss'
import './toggle.scss'

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
			<div className="footer-special">
				<h1>James Massa's Pattern Library!</h1>

				<Example title="My Special <Header>">
					      <Header  title="Header Title"  text="This is my header text"></Header>
				</Example>

				<Example title="My Special <Footer>">
					<Footer name="Footer">Footer</Footer>
				</Example>

				<Example title="My Special <toggle>">
					<Toggle/>
				</Example>

				<Example title="Putting all 3 components together">
					<Toggle>
						<Header  title="Header Title"  text="This is my header text"></Header> 
						<Footer name="Footer">Footer</Footer>
					</Toggle>
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