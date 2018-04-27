import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Movie from './Movie.jsx'
import LoadingIndicator from './LoadingIndicator.jsx'
import FontAwesome from 'react-fontawesome'

class MovieSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			searchTerms: '',
			moviesSearching: false
		};

		this.setSearchTerms = this.setSearchTerms.bind(this);
		this.searchMovies = this.searchMovies.bind(this);
		this.selectMovie = this.selectMovie.bind(this);
	}

	setSearchTerms(event) {
		this.setState({ searchTerms: event.target.value });
	}

	selectMovie(id) {
		axios.get(`http://www.omdbapi.com/?apikey=983c69bf&i=${id}`).then((response) => {
			this.setState({ selectedMovie: response.data });
		});
	}

	searchMovies(event) {
		this.setState({ moviesSearching: true });
		axios.get(`http://www.omdbapi.com/?apikey=983c69bf&s=${this.state.searchTerms}`).then((response) => {
			this.setState({ movies: response.data.Search });
			this.setState({ moviesSearching: false });
		});
		event.preventDefault();
	}

	render() {
		return (
			<section className='movie-search'>
				<form className='search-box' onSubmit={this.searchMovies}>
					<label>Search Movies: </label>
					<input name='movie-searcher' type='text' onChange={this.setSearchTerms} />
					<input type='submit' value='Search' />
				</form>
				{this.state.moviesSearching &&
					(
						<LoadingIndicator
							loading={this.state.moviesSearching}
							spinnerIcon='spinner'
							color='red'
						/>
					)
				}
				<section className='movie-list'>
					{this.state.selectedMovie ?
					 (
						<Movie
							id={this.state.selectedMovie.imdbID}
							title={this.state.selectedMovie.Title}
							poster={this.state.selectedMovie.Poster}
							year={this.state.selectedMovie.Year}
							plot={this.state.selectedMovie.Plot}
							imdbRating={parseInt(this.state.selectedMovie.imdbRating)}
							selected={true}
						/>
					 )
					: (this.state.movies && <div className='select-prompt'>Select a Movie for More Info <FontAwesome name='arrow-right'/></div>)}
					{this.state.movies && this.state.movies.map((movie) =>
						<Movie
							id={movie.imdbID}
							title={movie.Title}
							poster={movie.Poster}
							year={movie.Year}
							onMovieClick={this.selectMovie}
						/>
					)}
				</section>
			</section>
		)
	}
}

export default MovieSearch
