import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='input'>
				<input value={this.props.currentText} onChange={this.props.onType} onKeyUp={this.props.onSend} />
				<button disabled={this.props.currentText === ``} onClick={this.props.onSend}>Send</button>
			</div>
		);
	}
}

export default Input