import React from 'react'
import List from './list'



function Nav({ listItems }) {
    return (
        <aside className="main-nav">
            <ul>
                <List items={listItems} />
            </ul>
        </aside>
    );
}
 
export default Nav 
