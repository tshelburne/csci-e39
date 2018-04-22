import React, { Component } from 'react'
import PropTypes from '../support/prop-types'

class Message extends Component {

    state = {

    }

    render() {
        const { id, member, text, createdAt, textColor } = this.props
        return (
            <div>
				<label>{member.name} at id={id} {createdAt.toISOString()}</label>
				<p style={{backgroundColor: textColor}}>{text}</p>
			</div>
        )
    }
}


export default Message