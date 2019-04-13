import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';

const Image = (props) => {

    const { name, url, error } = props;

    return <div className="image">
        {!error && <img src={url} />}
        {!!error && <p className="failure">{error}</p>}
        <label>{name}</label>
    </div>
}

Image.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    error: PropTypes.string,
}

export default Image;