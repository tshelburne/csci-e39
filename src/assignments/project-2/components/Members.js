
import React from 'react'

function Members({ students, self }) {

    return (<section className='chat-members'>
        <h2>Members</h2>
        <ul>
            {students.map(({ id, name }) =>
                <li key={id} className={(id === self.id) && "self"}><span>{name}</span> </li>
            )}
        </ul>
    </section>
    )
}
export default Members
