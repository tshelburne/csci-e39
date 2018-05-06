import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import { TextSizer } from './components/textsizer.jsx'
import { BackgroundCard } from './components/backgroundcard.jsx'
import { ForegroundCard } from './components/foregroundcard.jsx'

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
		<div id="gradient">
			<div className="style-guide">
				<br></br>
				<br></br>
				<h1>The Pattern Library</h1>

				<Example title="The <TextSizer>">
					<TextSizer/>
				</Example>

				<Example title="The <BackgroundCard>">
					<BackgroundCard numCards={0} label="Change your background color here: " onChange={() => alert('You have changed the background color!')} />
				</Example>

				<Example title="The <ForegroundCard>">
					<ForegroundCard label="Change your foreground card color here: " onChange={() => alert('You have changed the foreground card color!')} />
				</Example>

				<Example title="The <TextSizer & CardColor Combination>">
					<BackgroundCard 
						showButton={true}
						numCards={3} 
						label="Change your background color here: " 
						onChange={() => alert('You have changed the background color!')} />
				</Example>

			</div>
			</div>
		) 
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary