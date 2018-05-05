import React from 'react'

const CompletedFilesItem = ({file}) => {
	const {id, name, url, error, updatedAt} = file;

	return <li className="completedFilesItem">
				<span className="cf-item-name" id={updatedAt}>{name}</span>
				{!error && <img src={url} aria-labelledby={updatedAt} className="cf-item-img" />}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export const CompletedFilesItemExamples = {
		"one": {
			id:"1", 
			name:"example image", 
			url: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4", 
			error: "", 
			updatedAt: "1525968000000",
		},

		"error": {
			id:"1", 
			name:"example image", 
			url: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4", 
			error: "Max file size 500KB", 
			updatedAt: "1525968000001",
		},
};

export default CompletedFilesItem