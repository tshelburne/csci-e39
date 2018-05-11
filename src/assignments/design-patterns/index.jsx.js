import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import ToggleButton from './components/toggleButton.jsx';
import ItemCard from './components/itemCard.jsx';
import ToggleItemCardDescription from './components/toggledItemCardDecsription.jsx';
import CaseChanger from './components/caseChanger.jsx';

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
				<div className="header">
					<h1>My Pattern Library!</h1>
				</div>
				<Example title="Site Colors">
					<div className="siteColorContainer">
						<div className="primaryColor">
							<p>Primary Color</p>
						</div>
						<div className="accentColor">
							<p>Accent Color</p>
						</div>
					</div>
				</Example>
				
				<Example title="Site Fonts">
					<h1>Header Font</h1>
					<p>Body Font</p>
				</Example>

				<Example title="Toggle Button">
					<ToggleButton />
				</Example>
				
				<Example title="Lower-Uppercase Buttons">
					<CaseChanger />
				</Example>

				<Example title="Item Card with Props">
					<ItemCard buttonCopy="Click me"
							buttonUrl="http://localhost:3000"
							imageUrl="https://avatars0.githubusercontent.com/u/6720549?s=200&v=4"
							imageAltText="Natalya Shelburne, spokesperson for Champ Chat" />
				</Example>

				<Example title="Item Card with Toggled Description">
					<ToggleItemCardDescription buttonCopy="Click me"
							buttonUrl="http://localhost:3000"
							imageUrl="https://avatars0.githubusercontent.com/u/6720549?s=200&v=4"
							imageAltText="Natalya Shelburne, spokesperson for Champ Chat"
							imageDescription="This is an image of Nat" />
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