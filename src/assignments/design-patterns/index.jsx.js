import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import List from './components/list.jsx'
import Event from './components/event.jsx'


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
				<h1 className="project-title">Ashley Davis | Design Patterns Library</h1>

				<main>
					<Example title="Lists" blurb="Lists can be ordered or unordered.">
						<List ordered={false}><span>hi</span><span>double hi</span><span>the last hi</span></List>
						<List ordered={true}><span>hi</span><span>double hi</span><span>the last hi</span></List>
					</Example>

					<Example title="Event">
						<div className="event-example">
							<Event
								title="Community Engagement Through Filmmaking Screening"
								date="Wednesday, May 9"
								startTime="12:00PM"
								endTime="1:00PM"
								location="L-324 Fainsod Room"
								description="A screening of a series of short films created by members of the broader Harvard community"
							/>
						</div>
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
				</main>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary