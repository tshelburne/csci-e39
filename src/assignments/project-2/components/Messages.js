
import React from 'react'
import Section from './Section'

function Messages({ messages, self }) {
    return (<Section title='Messages' styleName='chat-messages'>
      <ul className="message-list">
        {messages.map(({ id, student, text, createdAt }) =>
        <li className={((student.id == self.id) ? "message-content self" : "message-content")} key={id} >
            <label className="message-name">{student.name}</label>
            <p className="message-text">{text}</p>
            <small className="message-timestamp">
                {createdAt.getHours()}:{(createdAt.getMinutes() < 10) ? ("0" + createdAt.getMinutes()) : createdAt.getMinutes()} on {createdAt.toLocaleDateString()}
            </small>
        </li>
        )}
      </ul>
  </Section>)
}

export default Messages
