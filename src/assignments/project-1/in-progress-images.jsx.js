import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader.jsx";

class InProgress extends React.Component {
	render() {
		return (
			<div>
				{this.props.pendingFiles.length > 0 && (
					<h2 className="gallery-header">In Progress</h2>
				)}

				<ul>
					{this.props.pendingFiles.map(file => {
						const { id, name, progress } = file;
						return (
							<li className="photo-list" key={id}>
								<label>{name}</label>
								<progress
									className="custom-progress"
									value={progress}
									max="100"
								>
									{progress}%
								</progress>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

InProgress.propTypes = {
	pendingFiles: PropTypes.array
};

export default InProgress;
