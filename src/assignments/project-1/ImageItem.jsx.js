import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({file, onClick}) => {
    const { id, name, url, error } = file

    return (
        <li key={id}>
            {!error &&
                <a className="foo" href="javascript:void(0)" onClick={onClick}>
                    <div className="image-item">
                        <picture className="photograph">
                            <source
                                media="max-width: 768"
                                srcSet={url}
                            />
                        </picture>
                        <img className="photograph" src={url} alt={name} title={name} />
                    </div>
                </a>
            }
            {!!error &&
                <div className="error">
                    <label>ERROR: {name}</label><br />
                    <p className="failure">{error}</p>
                </div>
            }
        </li>
    )
}

ImageItem.propTypes = {
	file: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
        error: PropTypes.string,
	}).isRequired,
}

export default ImageItem

