import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const { listClass, listItemClass } = props;
    // wrap items
    const listItems = props.children.map(item => {
        // needed for more efficient rendering in list
        // passing is highly preferred
        const id = item.id ? `${item.id}-li` : '';
        return (<li className={'list-item' + (listItemClass ? ` ${listItemClass}` : '')} id={id} key={id}>{item}</li>);
    });
    return (
        <ul className={'list' + (listClass ? ` ${listClass}` : '')}>
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