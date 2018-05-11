import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class Label extends React.Component {
    constructor() {
        super(...arguments)
        autobind(this)
    }

    render() {
        const { forInput, text } = this.props

        return (
            <label htmlFor={forInput}>{text}: </label>
        )
    }
};

export default Label;