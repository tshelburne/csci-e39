import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Member extends Component {

    state = {

    }

    render() {
        const { id, name } = this.props
        return (
            <div>{id} - {name}</div>
        )

    }
}

const memberPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
})

export default Member

