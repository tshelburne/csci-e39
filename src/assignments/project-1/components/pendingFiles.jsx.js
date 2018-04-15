import React from 'react'
import PropTypes from 'prop-types'

// const PendingFiles = ({pendingFiles}) => {
// 	return <div className="pendingFiles">
// 		<h2>In Progress</h2>
// 		<ul>
// 			{pendingFiles.map(file => {
// 				const {id, name, progress} = file

// 				return <li key={id}>
// 					<progress value={progress} max="100">{progress}%</progress>
// 					<span className="pending-filename">{name}</span>
// 				</li>
// 			})}
// 		</ul>
// 	</div>
// }

class PendingFiles extends React.Component {

	constructor() {
		super(...arguments)
	}

	reveal() {
		const {pendingFiles} = this.props;
		const checkLength = pendingFiles.length;
		if(checkLength === 0) {
			return "pendingFiles sr-only"
		}
		else {
			return "pendingFiles"
		}
	}

	render() {
		return <div className={this.reveal()}>
		<h2>In Progress</h2>
		<ul>
			{this.props.pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<progress value={progress} max="100">{progress}%</progress>
					<span className="pending-filename">{name}</span>
				</li>
			})}
		</ul>
	</div>
	}
}

PendingFiles.propTypes = {
	pendingFiles: PropTypes.object.isRequired,
}

export default PendingFiles
