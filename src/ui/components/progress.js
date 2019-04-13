import React from 'react';
import PropTypes from 'prop-types';
import './progress.scss';

const Progress = (props) => {

    const { name, progress } = props;
    return <div>
        <label>{`${name}: `}</label>
        <progress value={progress} max="100">{progress}%</progress>
    </div>
}

Progress.propTypes = {
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
}

export default Progress;