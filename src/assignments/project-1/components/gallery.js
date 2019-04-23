import React from 'react'
import Card from './card.js'
import autobind from 'class-autobind'

class Gallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			isFiltered: false,
			hasFavorites: false,
			favoritesCount: 0
		}
		// This binding is necessary to make `this` work in the callback
		this.toggleFiltered = this.toggleFiltered.bind(this);
		this.incrementFavorites = this.incrementFavorites.bind(this);
	}

	toggleFiltered() {
     this.setState(state => ({
       isFiltered: !state.isFiltered
     }));
  }

	incrementFavorites(wasFavorite) {
		if (wasFavorite && (this.state.favoritesCount === 1)) {
			// subtract one (to zero) and clear filter
			this.setState(state => ({
				favoritesCount: state.favoritesCount -= 1,
				isFiltered: false
			}));
		} else if (wasFavorite) {
				// subtracting one but don't need to clear filter
				this.setState(state => ({
					favoritesCount: state.favoritesCount -= 1
				}));
		} else {
			// add one
			this.setState(state => ({
				favoritesCount: state.favoritesCount += 1
			}));
		}
		this.setState(state => ({
			hasFavorites: state.favoritesCount > 0
		}));
	}

	render() {
		const { successfulFiles } = this.props

		return <div>
			<h2>Gallery</h2>
			{this.state.hasFavorites ? (
	        <button onClick={this.toggleFiltered} className="filtered-button" aria-label={this.state.isFiltered ? "Show all" : "Show only favorites"} data-filtered={this.state.isFiltered} > {this.state.isFiltered ? "Show all" : "Show only favorites"}</button>
	      ) : (
	        <div>
						<button disabled className="demo-button"> &#10084; </button>
						<span><strong>Looking good!</strong> Why not label your favorite photos to enable filtering?</span>
					</div>
	    )}
			<ul class="gallery" data-filtered={this.state.isFiltered}>
				{successfulFiles.map(file => {
					const {id, name, url, error} = file
					return <Card { ...file}  incrementFavorites={this.incrementFavorites} />
				})}
			</ul>
		</div>
	}
}

export default Gallery
