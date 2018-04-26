import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class ProgressBars extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		return <ul>
			{this.props.pendingItems.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>
	}

}

ProgressBars.propTypes = {
	pendingItems: PropTypes.array.isRequired,
}

export default ProgressBars



