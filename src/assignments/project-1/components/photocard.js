import React from 'react' 
import Img from './img' 
const PhotoCard = ({ image, title, style }) => ( 
    <div className="photo-card">
        <Img className="photo-card-image" small={image} large={image} style={style} alt={title} />
        <h5 className="photo-card-title">{title}</h5>  
    </div> 
);

export default PhotoCard