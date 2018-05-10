import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Swatch extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {name, color, ...inputProps} = this.props;
		
		return <div className="sg-colors" id={name}>
			<span className="sg-swatch" style={{background: color}}></span>
			<label className="label sg-label">
				<em>{name}</em><br />
				{color}
			</label>
    </div>
	}

}

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}


export default Swatch
