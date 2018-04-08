import React from 'react'

const CompletedFilesItem = ({file}) => {
	const {id, name, url, error} = file;

	return <li className="completedFilesItem">
				<span id={id}>{name}</span>
				{!error && <img src={url} style={{maxWidth: `200px`}} aria-labelledby={id}/>}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export default CompletedFilesItem
