import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, progress, ...inputProps} = this.props;

    return(
      <React.Fragment>
        <progress value={progress} max="100">{progress}%</progress>
        <label>{name}</label>
      </React.Fragment>
    )
  }
}

ProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
}

export default ProgressBar;
