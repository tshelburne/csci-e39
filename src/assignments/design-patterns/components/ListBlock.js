import React from 'react'

const ListBlock = ({children, ...props}) => {
    let keyIdx = 0
    return <ul className='list-block'>
        {React.Children.map(children, (child) => {
            keyIdx++
            return <li key={keyIdx} className='list-block-item'>
                {child}
            </li>
        })}
    </ul>
}

export default ListBlock
