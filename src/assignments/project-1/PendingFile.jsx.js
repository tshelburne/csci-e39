import React from 'react'
import PropTypes from 'prop-types'

const PendingFile = ({file}) => {
    const { name, progress } = file

    return (
        <div className="pending-file">
            <label className="pending-file-label">{name}</label>
            <progress className="pending-file-progress" value={progress} max="100">{progress}%</progress>
        </div>
    )
} 

PendingFile.propTypes = {
	file: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        progress: PropTypes.number,
        url: PropTypes.string,
        error: PropTypes.string,
	}).isRequired,
}

export default PendingFile
