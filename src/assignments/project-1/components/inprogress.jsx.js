import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class InProgress extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
    const {name, id, progress} = this.props

		return <section>
      <label>Uploading: {name}</label>
      <progress value={progress} max="100">{progress}%</progress>
    </section>
	}

}

InProgress.propTypes = {

}

export default InProgress
