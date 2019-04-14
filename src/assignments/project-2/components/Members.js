
import React from 'react'

function Members({ students }) {
    return (<section className='chat-members'>
        <h2>Members</h2>
        <ul>
            {students.map(({ id, name }) =>
                <li onClick={() => handleClick(name)} key={id}><span>{name}</span></li>
            )}
        </ul>
    </section>
    )
}
export default Members
