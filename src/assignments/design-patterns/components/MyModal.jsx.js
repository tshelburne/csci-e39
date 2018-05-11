import React from 'react'

class MyModal extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {title, body, footer} = this.props
		return (
			<div className="modal-dialog">
				<div className="modal-title-wrapper">
					<h4 className="modal-title">{title}</h4>
				</div>
				<div className="modal-body">{body}</div>
				<div className="modal-footer">{footer}</div>
			</div>
		)
	}
}

export default MyModal