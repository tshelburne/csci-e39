import React from 'react';
import PropTypes from 'prop-types';

class UploadedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, url, error, ...initialProps } = this.props;

    return(
      <React.Fragment>
        {!error && <img alt={name} src={url} />}
        <label>{name}</label>
        {!!error && <p className="failure">{error}</p>}
      </React.Fragment>
    )
  }
}

UploadedItem.propTypes = {
  name: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired,
  error:  PropTypes.string.isRequired,
  description: PropTypes.string
}

export default UploadedItem;
