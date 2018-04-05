import React from 'react';
import PropTypes from 'prop-types';

const Completed = () => {
	const completedFiles = uploads.files.filter(({ progress }) => !progress);
	{
		completedFiles.map(file => {
			const { id, name, url, error } = file;

			return (
				<li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{ maxWidth: `200px` }} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			);
		});
	}
};

export default Completed;
