
import React from 'react'

function Messages({ messages }) {
    return (<section className='chat-messages'>
      <h2>Messages</h2>
      <ul className="message-list">
        {messages.map(({ id, student, text, createdAt }) =>
        <li className="message-content" key={id}>
            <label>{student.name}</label>
            <span className="message-text">{text}</span>
            <small className="message-timestamp">
                {createdAt.getHours()}:{(createdAt.getMinutes() < 10) ? ("0" + createdAt.getMinutes()) : createdAt.getMinutes()} on {createdAt.toLocaleDateString()}
            </small>
        </li>
        )}
      </ul>
    </section>)
}

export default Messages
