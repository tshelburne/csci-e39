import React from 'react'

const List = ({children, ...props}) => {

    return (
        <ul {...props}>
            {React.Children.map(children, child => <li>{child}</li>)}
        </ul>
    )
}

export default List