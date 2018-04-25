import React from 'react'

const CompletedFilesItem = ({file}) => {
	const {id, name, url, error, updatedAt} = file;

	return <li className="completedFilesItem">
				<span className="cf-item-name" id={updatedAt}>{name}</span>
				{!error && <img src={url} aria-labelledby={updatedAt} className="cf-item-img" />}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export default CompletedFilesItem
