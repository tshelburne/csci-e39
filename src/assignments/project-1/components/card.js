import React from 'react'

import autobind from 'class-autobind'

class Card extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			isFavorite: false
		}
		// This binding is necessary to make `this` work in the callback
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}

	toggleFavorite(e) {
		this.props.incrementFavorites(this.state.isFavorite)
     this.setState(state => ({
       isFavorite: !state.isFavorite
     }));
  }

	render() {
		const { id, name, url, error, incrementFavorites } = this.props
		return <li key={id} className="card" data-favorite={this.state.isFavorite}>
			{!error && <img src={url} style={{maxWidth: `200px`}} />}
			<h2>{name}</h2>
			<button onClick={this.toggleFavorite} className="favorite-button" aria-label={this.state.isFavorite ? "Remove from favorites" : "Add to favorites"} data-favorite={this.state.isFavorite} > &#10084; </button>
		</li>
	}
}

export default Card
