import React from 'react'

function Message({ messages }) {
    return (
        messages.map(({ id, student, text, createdAt }) =>
            <li key={id}>
                <label>{student.name} at {createdAt.toISOString()}</label>
                <p>{text}</p>
            </li>
        )
    )
}
export default Message