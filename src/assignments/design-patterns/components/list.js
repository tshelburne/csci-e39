import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '../../../util/functions';

const List = (props) => {
    const { listClass, listItemClass } = props;
    // wrap items
    const listItems = props.children.map(item => {
        // generate unique id/key for each item falling back to uuid
        // needed for more efficient rendering in list
        const id = item.id ? `${item.id}-li` : uuid();
        return (<li className={'list-item' + listItemClass ? ` ${listItemClass}` : ''} id={id} key={id}>{item}</li>);
    });
    return (
        <ul className={'list' + listClass ? ` ${listClass}` : ''}>
            {listItems}
        </ul>
    );
}

List.propTypes = {
    children: PropTypes.string.isRequired,
    listClass: PropTypes.string,
    listItemClass: PropTypes.string
}

export default List;