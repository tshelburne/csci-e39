import React from 'react'
import PropTypes from 'prop-types'

class ProgressBar extends React.Component {
  render() {
    return <ul>
      {this.props.pendingFiles.map(file => {
        const {id, name, progress} = file
        return <li key={id}>
          <label>{name}</label>
          <progress value={progress} max="100">{progress}%</progress>
        </li>
      })}
    </ul>
	}
}

ProgressBar.propTypes = {
	pendingFiles: PropTypes.array.isRequired,
}

export default ProgressBar