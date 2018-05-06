import React from "react";
import PropTypes from "prop-types";

const InProgress = ({ pendingFiles }) => {
	return (
		<div className="album-container">
			{pendingFiles.length > 0 && (
				<h2 className="centered-title">In Progress</h2>
			)}
			<ul className="in-progress-list">
				{pendingFiles.map(file => {
					const { id, name, progress } = file;

					return (
						<li className="uploading-in-progress" key={id}>
							<label className="in-progress-label">{name}</label>
							<progress
								value={progress}
								max="100"
								className="custom-progress"
							>
								{progress}%
							</progress>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

InProgress.propTypes = {
	pendingFiles: PropTypes.array.isRequired
};

export default InProgress;
