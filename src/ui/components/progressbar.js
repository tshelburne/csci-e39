import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class ProgressBar extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}


	render() {
		const {inProgress, ...inputProps} = this.props
     return(<article class="box content">
			 <ul>
	    {inProgress.map(file => {
      				const {id, name, progress} = file
      				return(
              <li key={id}>
      					<label>{name}</label>
      					<progress value={progress} max="100">{progress}%</progress>
      				</li>)
    })}
    </ul></article>)
	}

}

ProgressBar.propTypes = {
	inProgress: PropTypes.func.isRequired,
}

export default ProgressBar
