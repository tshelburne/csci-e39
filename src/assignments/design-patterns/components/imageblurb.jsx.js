import React from 'react'

const ImageBlurb = ({ src, title, blurb }) => (
    <article className="image-blurb">
        <img className="image-blurb-image" src={src} title={blurb} alt={blurb} />
        <div className="image-blurb-text">
            <p className="image-blurb-title">{title}</p>
            <p className="image-blurb-blurb">{blurb}</p>
        </div>
    </article>
)

export default ImageBlurb