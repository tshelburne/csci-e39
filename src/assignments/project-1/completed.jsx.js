import React from 'react';
import PropTypes from 'prop-types';

const Completed = props => {
	return (
		<ul>
			{props.completedFiles.map(file => {
				const { id, name, url, error } = file;

				return (
					<li key={id}>
						<label>Image {id}</label>
						{!error && <img src={url} />}
						{!!error && <p className="failure">{error}</p>}
					</li>
				);
			})}
		</ul>
	);
};

export default Completed;
