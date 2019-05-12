import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { src, title, alt, description, visible } = props;

    return (
        <main className={visible ? '' : 'isHidden'}>
            <h3>{title}</h3>
            <img className="image-sizing" src={src} alt={alt} />
            <div>{description}</div>
        </main>
    );
}

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string
}

export default Image;