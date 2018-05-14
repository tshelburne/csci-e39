import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { StarRating } from './Rating.jsx'

class Movie extends React.Component {
	constructor(props) {
		super(props);

		this.selectMovie = this.selectMovie.bind(this);
	}

	selectMovie(id, event) {
		this.setState({ selected: true });
		this.props.onMovieClick(id);
	}

	render() {
		return (
			<div className={this.props.selected ? 'selected-movie' : 'movie'}>
				{ this.props.selected && <h4>Selected Movie:</h4> }
				<figure>
					<img src={this.props.poster} alt={this.props.title}/>
					<figcaption>
						<a href='https://www.imdb.com/title/{this.props.id}/'>{this.props.title}, {this.props.year}</a>
						{this.props.selected && (<p class='plot'><b>Plot:</b> {this.props.plot}</p>)}
					</figcaption>
				</figure>
				{ !this.props.selected && <button onClick={(e) => this.selectMovie(this.props.id, e)}>Select Movie</button>}
				{ this.props.selected && <StarRating value={this.props.imdbRating} max={10}/>}
			</div>
		)
	}
}

Movie.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	rating: PropTypes.string,
	poster: PropTypes.string,
	year: PropTypes.string,
	onMovieClick: PropTypes.func,
	selected: PropTypes.bool,
	imdbRating: PropTypes.number,
	plot: PropTypes.string
}

export default Movie
