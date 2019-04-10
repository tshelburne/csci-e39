import React from 'react'

import autobind from 'class-autobind'

class Card extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const { id, name, url, error} = this.props
		return <li key={id} className="card">
			{!error && <img src={url} style={{maxWidth: `200px`}} />}
			<h2>{name}</h2>
		</li>
	}
}

export default Card
