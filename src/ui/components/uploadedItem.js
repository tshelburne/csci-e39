import React from 'react';
import PropTypes from 'prop-types';

class UploadedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(props) {
    const { id } = this.props;
    console.log(this.props);
  }

  render() {
    const { id, name, url, error, ...initialProps } = this.props;

    return(
      <React.Fragment>
        {!error && <img alt={name} src={url} />}
        <label>{name}</label>
        {!!error && <p className="failure">{error}</p>}
        <button className="button" onClick={this.handleDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

UploadedItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired,
  error:  PropTypes.string.isRequired
}

export default UploadedItem;
