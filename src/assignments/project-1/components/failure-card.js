import React from 'react'
import failedIcon from '../failed.svg'
import autobind from 'class-autobind'

class FailureCard extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const { id, name, url, error} = this.props
		return <li key={id} className="failedCard">
				<img src={failedIcon} style={{width: `50px`, height: `50px`}} />
				<div class="content">
					<h4>{name}</h4>
					{!!error && <p className="failure">{error}</p>}
				</div>
			</li>
	}
}

export default FailureCard
