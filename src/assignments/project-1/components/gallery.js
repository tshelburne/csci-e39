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
		this.countFavorites = this.countFavorites.bind(this);
	}

	toggleFiltered() {
     this.setState(state => ({
       isFiltered: !state.isFiltered
     }));
  }

	countFavorites(oldFavoriteValue) {
		console.log('in parent countFavorites and oldFavoriteValue is: ', oldFavoriteValue)
		console.log("this.state.favoritesCount is: ", this.state.favoritesCount)
	if (oldFavoriteValue && (this.state.favoritesCount === 1)) {
		console.log('subtracting one and clearing filter')
		this.setState(state => ({
			favoritesCount: state.favoritesCount -= 1
		}));
		this.setState(state => ({
			isFiltered: false
		}));
	} else if (oldFavoriteValue) {
			console.log('subtracting one but don\'t need to clear filter')
			this.setState(state => ({
				favoritesCount: state.favoritesCount -= 1
			}));
	} else {
		console.log('adding one')
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
			<p><strong>My goodness, you are looking good!</strong></p>
			{this.state.hasFavorites ? (
	        <button onClick={this.toggleFiltered} className="filtered-button" aria-label={this.state.isFiltered ? "Show all" : "Show only favorites"} data-filtered={this.state.isFiltered} > {this.state.isFiltered ? "Show all" : "Show only favorites"}</button>
	      ) : (
	        <p>Click on the &#10084; to label your favorite photos and enable filtering!</p>
	      )}
			<ul class="gallery" data-filtered={this.state.isFiltered}>
				{successfulFiles.map(file => {
					const {id, name, url, error} = file
					return <Card { ...file}  countFavorites={this.countFavorites} />
				})}
			</ul>
		</div>
	}
}

export default Gallery
