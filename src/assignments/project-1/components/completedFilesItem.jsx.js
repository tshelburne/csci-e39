import React from 'react'

const CompletedFilesItem = ({file}) => {
	const {id, name, url, error} = file;

	return <li className="completedFilesItem">
				<span className="cf-item-name" id={id}>{name}</span>
				{!error && <img src={url} aria-labelledby={id} className="cf-item-img" />}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export default CompletedFilesItem
