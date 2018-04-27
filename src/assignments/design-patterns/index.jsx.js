import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import FontAwesome from 'react-fontawesome'
import { StarRating, HeartRating, ThumbRating } from './support/Rating.jsx'
import LoadingIndicator from './support/LoadingIndicator.jsx'
import MovieSearch from './support/MovieSearch.jsx'
import Movie from './support/Movie.jsx'

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

				<Example title="Rating">
					<StarRating value={3} max={5}/>
					<HeartRating value={4} max={5}/>
					<ThumbRating value={1} max={5}/>
				</Example>

				<Example title="Loading Indicator">
					<LoadingIndicator color="blue" spinnerIcon="spinner" loading={true}/>
				</Example>

				<Example title="Movie">
					<Movie
						id='tt0094737'
						title='Big'
						poster='https://ia.media-imdb.com/images/M/MV5BNDk0OTM1Mzk3M15BMl5BanBnXkFtZTgwNDg2NjIyMDE@._V1_SX300.jpg'
						year='1988'
						plot='After wishing to be made big, a teenage boy wakes the next morning to find himself mysteriously in the body of an adult.'
						imdbRating={7}
						selected={true}
					/>
				</Example>

				<Example title="Movie Search">
					<MovieSearch />
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
