import React from 'react'

const PictureListItem = ({file}) => {
	const {id, name, url, error, updatedAt} = file;

	return <li className="pictureListItem">
				<span className="pl-item-name" id={updatedAt}>{name}</span>
				{!error && <img src={url} aria-labelledby={updatedAt} className="pl-item-img" />}
				{!!error && <p className="failure">{error}</p>}
			</li>
}

export const PictureListItemExamples = {
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

export default PictureListItem