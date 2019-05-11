import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Button from './components/button';
import CardItem from './components/cardItem';

import './app.scss'
import './styles/main.scss'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)
		this.handleOnClick = this.handleOnClick.bind(this);

		this.state = {activeCode: `react`, isVisible: false}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	handleOnClick() {
		this.setState({isVisible: !this.state.isVisible});
		console.log(this.state.isVisible);
	}

	render() {
		return (
			<div className="style-guide">
				<h1>Etienne's Pattern Library!</h1>

				<Example title="My Special Button Component">
					<Button onClickMessage="Component taking props">Etienne's Button Component</Button>
					<Button onClickMessage="Secondary button">Secondary Button Component</Button>
				</Example>

				<Example title="Card Item Component">
					<CardItem>Card Item with text as children</CardItem>
					<CardItem>
						Card Item with text and component as children
						<Button onClickMessage="Nested Components">Child Button with Message Prop</Button>
						<Button handleClick={this.handleOnClick}>Child Button Function Prop</Button>
					</CardItem>
				</Example>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
	handleOnClick: PropTypes.func
}

export default PatternLibrary