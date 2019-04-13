import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '../../../util/functions';
import './list.scss';

const List = (props) => {
    // wrap items
    const listItems = props.children.map(item => {
        // generate unique id for each item falling back to uuid
        const id = item.id ? `${item.id}-li` : uuid();
        return (<li className="list-item" id={id}>{item}</li>);
    });
    return (<ul className="list">
        {listItems}
    </ul>);
}

List.propTypes = {
    children: PropTypes.string.isRequired
}

export default List;