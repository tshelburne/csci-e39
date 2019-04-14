
import React from 'react'
import Section from './Section'

function Messages({ messages }) {
    return (<Section title='Messages' styleName='chat-messages'>
      <ul className="message-list">
        {messages.map(({ id, student, text, createdAt }) =>
        <li className={((student.id == self.id) ? "message-content self" : "message-content")} key={id} >
            <label>{student.name}</label>
            <span className="message-text">{text}</span>
            <small className="message-timestamp">
                {createdAt.getHours()}:{(createdAt.getMinutes() < 10) ? ("0" + createdAt.getMinutes()) : createdAt.getMinutes()} on {createdAt.toLocaleDateString()}
            </small>
        </li>
        )}
      </ul>
  </Section>)
}

export default Messages
