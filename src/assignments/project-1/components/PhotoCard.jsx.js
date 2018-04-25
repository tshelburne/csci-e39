import React from 'react'
import PropTypes from 'prop-types'

const PhotoCard = ({file}) => {
    const { id, name, url, error } = file

    return (
        <div className="photo-card">
            <img className="" src={url} alt={name} title={name} />
        </div>
    )
}

export default PhotoCard


/*
        <div className="photo-card">
            {!error &&
                <a href="javascript:void(0)">
                    <picture className="">
                        <source
                            srcSet={url}
                        />
                        <img className="" src={url} alt={name} title={name} />
                    </picture>
                    <h1 className="photo-card-title">{name}</h1>
                </a>
            }
            {!!error &&
                <div className="error">
                    <label>ERROR: {name}</label><br />
                    <p className="failure">{error}</p>
                </div>
            }
        </div>
*/
