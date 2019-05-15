import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Button from './components/button'
import Card from './components/card'
import List from './components/list'

import './app.scss'

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

				<Example title="Button">
					<Button
						onClick={() => alert('Button was clicked')}
						name={'Button Name'}
					/>
				</Example>

				<Example title="Card">
					<Card
						title={'Card Title'}
						content={'This is the card content. It can be long and wraps around'}
					/>
				</Example>

				<Example title="List">
					<List>
						<p>An item</p>
						<p>Another item</p>
						<p>A third item</p>
					</List>
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