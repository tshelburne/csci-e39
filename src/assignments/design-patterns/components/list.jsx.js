import React from 'react'

const List = ({ ordered, children }) => {
    const ListTag = ordered ? "ol" : "ul"
    return (
        <ListTag className={ordered ? 'default-list ordered' : 'default-list'}>
            {/* https://reactjs.org/docs/react-api.html#reactchildren */}
            {React.Children.map(children, child => <li><div>{child}</div></li>)}
        </ListTag>
    )
}

export default List