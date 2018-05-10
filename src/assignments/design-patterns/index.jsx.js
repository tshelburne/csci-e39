import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import List from './components/list.jsx'
import { Event, EventMini } from './components/event.jsx'
import ImageBlurb from './components/imageblurb.jsx'


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

					<Example title="Event" blurb="This could be anything">
						<Event
							title="Community Engagement Through Filmmaking Screening"
							date="Wednesday, May 9"
							startTime="12:00PM"
							endTime="1:00PM"
							location="L-324 Fainsod Room"
							description="A screening of a series of short films created by members of the broader Harvard community"
						/>

						<EventMini
							title="Community Engagement Through Filmmaking Screening"
							date="Wednesday, May 9"
							startTime="12:00PM"
							endTime="1:00PM"
							location="L-324 Fainsod Room"
							description="A screening of a series of short films created by members of the broader Harvard community"
						/>
					</Example>

					<Example title="Image Blurb">
						<ImageBlurb
							src="https://s9.postimg.cc/s3yld46e7/placeimg_640_480_tech.jpg"
							title="Your image blurb title"
							blurb="Some lead text to draw the user in." />
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