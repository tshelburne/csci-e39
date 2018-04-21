import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader.jsx";
import Pending from "./in-progress-images.jsx.js";
import Completed from "./completed-images.jsx.js";
class Uploads extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadProgress: null
		};
	}
	render() {
		const pendingFiles = this.props.uploads.files.filter(
			({ progress }) => progress && progress < 100
		);
		const completedFiles = this.props.uploads.files.filter(
			({ progress }) => !progress
		);
		return (
			<div>
				<h1 className="uploader">Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={this.props.actions.upload} />
				{/* do not delete this uploader component */}
				<Pending pendingFiles={pendingFiles} />
				<Completed completedFiles={completedFiles} />
			</div>
		);
	}
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`])
		.isRequired,
	message: PropTypes.string.isRequired
});

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
					.isRequired,
				name: PropTypes.string.isRequired,
				progress: PropTypes.number,
				url: PropTypes.string,
				error: PropTypes.string
			})
		).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired
	}).isRequired,
	actions: PropTypes.object.isRequired
};

export default Uploads;
