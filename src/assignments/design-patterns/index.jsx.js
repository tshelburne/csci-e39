import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import List from './components/list.jsx'
import { Event, EventMini } from './components/event.jsx'
import ImageBlurb from './components/imageblurb.jsx'
import Modal from './components/modal.jsx'


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
					<Example title="Lists" blurb="Lists can be ordered or unordered. Each child node is rendered as a list item.">
						<List ordered={false}>
							<span>An item</span>
							<span>Another item</span>
						</List>
						<List ordered={true}>
							<span>First Item</span>
							<span>Second Item</span>
							<span>Third Item</span></List>
					</Example>

					<Example title="Event" blurb="Use the Event component to insert details about an event into your body copy.">
						<Event
							title="Community Engagement Through Filmmaking Screening"
							date="Wednesday, May 9, 2018"
							startTime="12:00PM"
							endTime="1:00PM"
							location="L-324 Fainsod Room"
							description="A screening of a series of short films created by members of the broader Harvard community"
						/>

						<p className="example--innerblurb">If you need a smaller version to use in, for example, a list, use the <code>EventMini</code> component.</p>
						<List>
							<EventMini
								title="Community Engagement Through Filmmaking Screening"
								date="Wednesday, May 9"
							/>
							<EventMini
								title="Community Engagement Through Filmmaking Screening"
								date="Wednesday, May 9"
							/>
							<EventMini
								title="Community Engagement Through Filmmaking Screening"
								date="Wednesday, May 9"
							/>
						</List>
					</Example>

					<Example title="Image Blurb" blurb="ImageBlurb is used to link users to content in a more engaging manner, by including an image and a blurb to describe the link destination.">
						<ImageBlurb
							src="https://s9.postimg.cc/s3yld46e7/placeimg_640_480_tech.jpg"
							destination="https://google.com"
							title="Your image blurb title"
							blurb="Some lead text to draw the user in." />
					</Example>

					<Example title="Modal" blurb="Use this component to render all of its children within a Modal overlay">
						<Modal modalTriggerText="Click me!">
							<Event
								title="Community Engagement Through Filmmaking Screening"
								date="Wednesday, May 9, 2018"
								startTime="12:00PM"
								endTime="1:00PM"
								location="L-324 Fainsod Room"
								description="A screening of a series of short films created by members of the broader Harvard community"
							/>
						</Modal>
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