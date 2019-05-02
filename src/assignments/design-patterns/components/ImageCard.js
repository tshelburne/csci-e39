import React from 'react'

const ImageCard = ({ imgSrc, imgAlt, vertical, children }) => {
    return (
    <div className={vertical ? `vertical-card img-card`: `img-card`}>
        <img className="rounded-img" src={imgSrc} alt={imgAlt} />
        {children && <div> {children} </div>}
    </div>);
}

export default ImageCard;