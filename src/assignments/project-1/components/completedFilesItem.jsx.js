import React from 'react'

const CompletedFilesItem = ({file}) => {
	const {id, name, url, error} = file;

	return <li className="completedFilesItem">
				<span id={id}>{name}</span>
				{!error && <img src={url} aria-labelledby={id}/>}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export default CompletedFilesItem
