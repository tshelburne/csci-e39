
import React from 'react'

function Messages({ messages, self }) {

    return (<section className='chat-messages'>
      <h2>Messages</h2>
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
    </section>)
}

export default Messages
