import React from 'react'
import Img from './img'
const PhotoCard = ({ image, title, style }) => (
    <div className="photo-card">
        <Img className="photo-card-image" small={image} large={image} style={style} alt={title} />
        <h5 className="photo-card-title">{add3Dots(title,20)}</h5>
    </div>
);

function add3Dots(string, limit) {
	var dots = "...";
	if (string.length > limit) {
		string = string.substring(0, limit) + dots;
	}

	return string;
}


export default PhotoCard