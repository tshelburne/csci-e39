import React from 'react'
import PropTypes from '../support/prop-types'

const PendingFile = ({file}) => {
    const { name, progress } = file

    return (
        <div className="pending-file">
            <label className="pending-file-label">{name}</label>
            <progress className="pending-file-progress" value={progress} max="100">{progress}%</progress>
        </div>
    )
} 

export default PendingFile
