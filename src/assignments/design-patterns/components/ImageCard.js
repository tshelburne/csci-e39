import React from 'react'

const ImageCard = ({ imgSrc, imgAlt, children }) => {
    return (
    <div class="img-card">
        <img className="rounded-img" src={imgSrc} alt={imgAlt} />
        {children && <div> {children} </div>}
    </div>);
}

export default ImageCard;