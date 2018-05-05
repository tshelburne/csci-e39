
import React from 'react'
import PropTypes from 'prop-types'

class MyModal extends React.Component {
	constructor(props) {
		super(props)

		// this.state = {activeCode: `react`}
	}

	render() {
		return (
			<div className="modal-dialog">
				<div className="blue">
					<h4 className="modal-title">Manage Phone Numbers</h4>
				</div>
				<div className="modal-body">Body Content</div>
				<div className="modal-footer">Footer Content</div>
			</div>
		)
	}
}

export default MyModal