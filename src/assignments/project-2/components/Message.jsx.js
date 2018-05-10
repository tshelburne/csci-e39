import React, { Component } from 'react'
import PropTypes from '../support/prop-types'

function createMarkup(text) { const t = text.toString(); return {__html: t}};

class Message extends Component {

    render() {
        const { id, member, text, createdAt, textColor } = this.props
        return (
            <li key={id}>
				<label>{member.name} at id={id} {createdAt.toISOString()}</label>
				<p dangerouslySetInnerHTML={createMarkup(text)} style={{backgroundColor: textColor}}></p>
			</li>
        )

    }
}


export default Message
