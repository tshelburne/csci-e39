
import React from 'react'

function Messages({ message }) {
    message.map(({ id, student, text, createdAt }) =>
        <li key={id}>
            <label>{student.name} at {createdAt.toISOString()}</label>
            <p>{text}</p>
        </li>
    )
}

export default Messages