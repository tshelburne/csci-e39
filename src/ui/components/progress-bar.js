import React from 'react'

class ProgressBar extends React.Component {
    render() {
        const {id, name, progress} = this.props.file;

        return <li key={id}>
            <label>{name}</label>
            <progress value={progress} max="100">{progress}%</progress>
        </li>
    }
}

export default ProgressBar