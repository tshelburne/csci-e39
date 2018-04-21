import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader.jsx";

class Completed extends React.Component {
	render() {
		return (
			<div>
				{this.props.completedFiles.length > 0 && (
					<h2 className="gallery-header">Completed</h2>
				)}
				<ul className="photo-list">
					{this.props.completedFiles.map(file => {
						const { id, name, url, error } = file;

						return (
							<li className="photo" key={id}>
								<label className="photo-label">{name}</label>
								{!error && (
									<img
										className="customImage"
										src={url}
										style={{
											maxWidth: `200px`
										}}
									/>
								)}
								{!!error && <p className="failure">{error}</p>}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

Completed.propTypes = {
	pendingFiles: PropTypes.array
};

export default Completed;
