import React from 'react'

const ImageBlurb = ({ src, destination, title, blurb }) => (
    <article className="image-blurb">
        <a href={destination}>
            <img className="image-blurb-image" src={src} title={blurb} alt={blurb} />
            <div className="image-blurb-text">
                <p className="image-blurb-title">{title}</p>
                <p className="image-blurb-blurb">{blurb}</p>
            </div>
        </a>
    </article>
)

export default ImageBlurb