import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

// import MainButton from './components/buttons.jsx'
//
// import ProgressBar from './components/progressbar.jsx'
//
// import Uploader from './components/uploader.jsx'

import RecipeCard from './components/recipecard.jsx'

import {RecipeName} from './components/recipename.jsx'
import {RecipeTime} from './components/recipetime.jsx'
import RecipeStars from './components/recipestars.jsx'

import {RecipeImage} from './components/recipeimage.jsx'


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
				<blockquote>Design Adapted from <a href="https://codepen.io/riktar/pen/rxPOLm" target="_blank">Riccardo Tartaglia's Recipe Card UI Design</a></blockquote>

				<Example title="My Recipe Card">
					<RecipeCard />
				</Example>

				<Example title="My Recipe Image">
					<div className="card">
						<RecipeImage className="image-2" />
				</div>
				</Example>

				<Example title="My Recipe Name">
					<div className="description">
						<div className="card">
						<RecipeName recipeName="Murphy Pot Pie" />
					</div>
				</div>
				</Example>

				<Example title="My Recipe Time">
					<div className="description">
						<div className="card">
						<RecipeTime recipeTime="2h 40m" />
					</div>
				</div>
				</Example>

				<Example title="My Recipe Rating">
					<div className="description">
						<div className="card">
						<RecipeStars />
					</div>
				</div>
				</Example>
{/*
				<Example title="My Special <button>">
					<MainButton />
				</Example>

				<Example title="My Special <progress>">
					<ProgressBar />
				</Example>

				<Example title="My Special <input type='file'>">
					<Uploader />
				</Example> */}
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary
