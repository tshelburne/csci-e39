import React from 'react'

const ListBlock = ({children, ...props}) => {
    let keyIdx = 0
    return <ul {...props} className='list-block'>
        {React.Children.map(children, (child) => {
            keyIdx++
            if (child.type == "li") child = child.props.children
            return <li key={keyIdx} className='list-block-item'>
                {child}
            </li>
        })}
    </ul>
}

export default ListBlock
