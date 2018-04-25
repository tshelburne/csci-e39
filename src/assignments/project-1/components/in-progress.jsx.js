import React from "react";
import PropTypes from "prop-types";

const InProgress = ({ pendingFiles }) => {
	console.log("pending files in inprogress are ", pendingFiles);
	return (
		<div>
			{pendingFiles.length > 0 && <h2>In Progress</h2>}
			<ul>
				{pendingFiles.map(file => {
					const { id, name, progress } = file;

					return (
						<li key={id}>
							<label>{name}</label>
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
