import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({file, onClick}) => {
    const { id, name, url, error } = file

    return (
        <div>
            {!error &&
                <div className="image-item">
                    <a href="javascript:void(0)" onClick={onClick}>
                        <picture className="photograph">
                            <source
                                srcSet={url}
                            />
                        </picture>
                        <img className="photograph" src={url} alt={name} title={name} />
                </a>
            </div>
            }
            {!!error &&
                <div className="error">
                    <label>ERROR: {name}</label><br />
                    <p className="failure">{error}</p>
                </div>
            }
        </div>
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

