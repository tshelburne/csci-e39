import React from 'react'
import Card from './card.js'
import autobind from 'class-autobind'

class Gallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			isFiltered: false
		}
		// This binding is necessary to make `this` work in the callback
		this.toggleFiltered = this.toggleFiltered.bind(this);
	}

	toggleFiltered() {
     this.setState(state => ({
       isFiltered: !state.isFiltered
     }));
  }

	render() {
		const { successfulFiles } = this.props
		return <div>
			<h2>Gallery</h2>
			<p>My goodness, you're looking good!</p>
			<button onClick={this.toggleFiltered} className="filtered-button" aria-label={this.state.isFiltered ? "Show all" : "Show only favorites"} data-filtered={this.state.isFiltered} > {this.state.isFiltered ? "Show all" : "Show only favorites"}</button>
			<ul class="gallery" data-filtered={this.state.isFiltered}>
				{successfulFiles.map(file => {
					const {id, name, url, error} = file
					return <Card { ...file } />
				})}
			</ul>
		</div>
	}
}

export default Gallery
