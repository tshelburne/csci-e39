import React from 'react'

const List = ({children, ...props}) => {

    return (
        <ul {...props}>
            {React.Children.map(children, child => <li key={child.key}>{child}</li>)}
        </ul>
    )
}

export default List