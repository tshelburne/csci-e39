import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => {
  return (
    <ul>      
      {items.map(i => {
        return <li>{i}</li>
      })}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
}
export default List;