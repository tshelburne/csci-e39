import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class Screenshot extends React.Component {
	constructor() {
		super(...arguments)
        autobind(this)
    }

    render() {
        const { name, url, description, error } = this.props

        return (<li  className="imageItem">
            <label>{name}</label>
            {!error && <img src={url} title={description} alt={description}/>}
            {!!error && <p className="failure">{error}</p>}
        </li>)
    }
};

export default Screenshot;