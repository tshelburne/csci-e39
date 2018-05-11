import React from 'react'
import PropTypes from 'prop-types'

const UnorderedList = ({items}) => (
	<ul>
        {items.map((item) => <li key={item.name}>{item.name}</li>)}
    </ul>
)

UnorderedList.propTypes = {
    items: PropTypes.array,
}

export default UnorderedList