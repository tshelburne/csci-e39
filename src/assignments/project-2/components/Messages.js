
import React from 'react'
import Message from './Message'

function Messages({ chatMessages }) {
    return (
        <section className='chat-messages'>
            <h2>Messages</h2>
            <ul>
                <Message messages={chatMessages} />
            </ul>
        </section>
    )
}
export default Messages