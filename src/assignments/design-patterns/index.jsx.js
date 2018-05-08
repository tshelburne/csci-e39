import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {KittenCard, BearCard} from './components/card.jsx'
import FilterableAnimalGallery from './components/filterable-animal-gallery.jsx'

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

				<Example title="Kitten Card">
					<KittenCard name="Little Paws" image="https://placekitten.com/200/200" text="This is a really great cat." />
				</Example>

				<Example title="Bear Card">
					<BearCard name="Big Claws" image="https://placebear.com/200/200" text="This bear is often sleepy." />
				</Example>

				<Example title="Filterable Gallery">
					<FilterableAnimalGallery animals={[
						{name: "Little Paws", image: "https://placekitten.com/200/200", text: "This is a really great cat.", species: "kitten"},
						{name: "Big Claws", image: "https://placebear.com/200/200", text: "This bear is often sleepy.", species: "bear"}
					]} />
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
