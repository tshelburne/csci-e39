import React from "react";
import PropTypes from "prop-types";

const Completed = ({ completedFiles }) => {
	console.log("pending files in Completed are ", completedFiles);
	return (
		<div className="album-container">
			<h2 className="centered-title">Completed</h2>
			<ul className="completed-list">
				{completedFiles.map(file => {
					const { id, name, url, error } = file;

					return (
						<li className="photo" key={id}>
							<label className="photo-label">{name}</label>
							{!error && (
								<img
									className="photo-src"
									src={url}
									style={{ maxWidth: `200px` }}
								/>
							)}
							{!!error && <p className="failure">{error}</p>}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Completed.propTypes = {
	completedFiles: PropTypes.array.isRequired
};

export default Completed;
