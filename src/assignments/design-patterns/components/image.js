import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { src, title, alt, description } = props;

    return (
        <Fragment>
            <h3>{title}</h3>
            <img src={src} alt={alt} />
            <div>{description}</div>
        </Fragment>
    );
}

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string
}

export default Image;