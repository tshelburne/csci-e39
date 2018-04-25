import React, { Component } from 'react'
import PropTypes from '../support/prop-types'

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

Member.propType = {
    member: PropTypes.member.isRequired,
}

export default Member
