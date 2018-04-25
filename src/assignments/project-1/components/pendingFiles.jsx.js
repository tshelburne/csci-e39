import React from 'react'
import PropTypes from 'prop-types'
import LiveAnnounce from './liveAnnounce.jsx'

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
		super(...arguments);
		this.state = {hidden: true, whatToSay: '', prevLength: -1};
	}

	reveal() {
		const {pendingFiles} = this.props;
		const checkLength = pendingFiles.length;
		if(checkLength === 0) {
			if (this.state.hidden === false) {
				if (this.state.prevLength > checkLength) {
					this.setState({hidden: true, whatToSay: 'Upload finished', prevLength: checkLength});
				}
				else {
					this.setState({hidden: true});
				}
			}
			return 'sr-only hide'
		}
		else {
			if (this.state.hidden === true) {
				this.setState({hidden: false, whatToSay: 'Uploading', prevLength: checkLength});
			}
			return null
		}
	}

	render() {
		return <div className={['pendingFiles', this.reveal()].join(' ')} aria-hidden={this.state.hidden}>
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
		<LiveAnnounce whatToSay={this.state.whatToSay} />
	</div>
	}
}

PendingFiles.propTypes = {
	pendingFiles: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default PendingFiles
