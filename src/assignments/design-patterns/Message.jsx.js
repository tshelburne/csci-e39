import React, { Component } from 'react'
import PropTypes from './support/prop-types'

function createMarkup(text) { const t = text.toString(); return {__html: t}};

class Message extends Component {
  
    render() {
        const { id, member, text, textColor, visibility } = this.props
        return (
            <div className={visibility}>
				<label>{member.name} at id={id}</label>
				<p style={{backgroundColor: textColor}}>{text}</p>
				<button className="delete-forever"> Delete Forever </button>
			</div>
        )
    }
}

export default Message
