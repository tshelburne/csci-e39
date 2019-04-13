import React from 'react'
function List({ items }) {
    return items.map(item => (
        <li key={item.name} className="main-li">{item.name}</li>
    ));
}

export default List