import React from 'react'
import Card from './card.js'
import autobind from 'class-autobind'

class Gallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			isFiltered: false,
			hasFavorites: false
		}
		// This binding is necessary to make `this` work in the callback
		this.toggleFiltered = this.toggleFiltered.bind(this);
		this.countFavorites = this.countFavorites.bind(this);
	}

	toggleFiltered() {
     this.setState(state => ({
       isFiltered: !state.isFiltered
     }));
  }

	countFavorites() {
		const favoritesCount = document.querySelectorAll('.card[data-favorite="true"]').length
		const hasFavorites = favoritesCount > 0
		console.log("favoritescount is ", favoritesCount)
		this.setState(state => ({
			hasFavorites: hasFavorites
		}));
		console.log("this.state.hasFavorites is ", this.state.hasFavorites)
	}

	render() {
		const { successfulFiles } = this.props
		// const hasFavorites = document.querySelectorAll('.card[data-favorite="true"]').length > 0 ? true : false
		return <div>
			<h2>Gallery</h2>
			<p>My goodness, you are looking good!</p>
			{this.state.hasFavorites && <p>there are favorites so there should be a filter button</p>}
			<button onClick={this.toggleFiltered} className="filtered-button" aria-label={this.state.isFiltered ? "Show all" : "Show only favorites"} data-filtered={this.state.isFiltered} > {this.state.isFiltered ? "Show all" : "Show only favorites"}</button>
			<ul onClick={this.countFavorites} class="gallery" data-filtered={this.state.isFiltered}>
				{successfulFiles.map(file => {
					const {id, name, url, error} = file
					return <Card { ...file  } />
				})}
			</ul>
		</div>
	}
}

export default Gallery
