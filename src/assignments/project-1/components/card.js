
import React, { Component } from 'react'

class Card extends Component {

	render() {

		return (
			<li class="img-card" key={this.props.id}>
				<label>{this.props.name}</label>
				<img src={this.props.url} />
			</li>
		);
	}
}

export default Card
