
import React from 'react'

function Messages({ messages }) {
    return (<section className='chat-messages'>
      <h2>Messages</h2>
      <ul>
        {messages.map(({ id, student, text, createdAt }) =>
            <li key={id}>
                <label>{student.name} at {createdAt.toISOString()}</label>
                <p>{text}</p>
            </li>
        )}
      </ul>
    </section>)
}

export default Messages
