import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Button from './components/button';
import CardItem from './components/cardItem';
import Image from './components/image';

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

				<Example title="My Image Component">
					<Image src="incorrect/filePath/notReal.jpg" title="Image Title" alt="Unfound Image" description="Image Component rendering when an image was not found" />
					<Image src="./assets/luke-and-dorris.JPG" title="Luke and Dorris" alt="My two cats Luke Skywalker and Dorris Pringle-Brule-Salahari" description="Luke Skywalker the gray tuxedo and Dorris Pringle-Brule-Salahari the tortie/tabby" />
				</Example>

				<Example title="My Card Item Component">
					<CardItem>Card Item with text as children</CardItem>
					<CardItem>
						Card Item with text and component as children
						<Button className="" handleClick={this.handleOnClick}>Child Button Function Prop</Button>
						<div className={this.state.isVisible ? '' : 'isHidden'}>Div element to show/hide based on click</div>
						<Button className="" onClickMessage="Nested Components">Child Button with Message Prop</Button>
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