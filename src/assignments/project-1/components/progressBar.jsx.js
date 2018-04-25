import React from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ProgressBar = ({pendingFiles}) => (
  <ul className="progress-bar">
    {pendingFiles.map(file => {
      const {id, name, progress} = file
      return <li key={id}>
        <label>{name}</label>
        <LinearProgress value={progress} variant="determinate" />
      </li>
    })}
  </ul>
)

ProgressBar.propTypes = {
	pendingFiles: PropTypes.array.isRequired,
}

export default withStyles(styles)(ProgressBar)
