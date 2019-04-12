import React from 'react'

const Footer = ({color}) => {
    // Couldn't figure out how to create a component without passing in a prop, so I have a useless prop here.
    return <footer class="album-container">
        <ul>
            <li>
                <a href="/contact">CONTACT</a>
            </li>
            <li>
                <a href="/faq">FAQ</a>
            </li>
            <li>
                <a href="/journal">ADVERTISE</a>
            </li>
            <li>
                <a href="/terms-of-use">TERMS OF USE</a>
            </li>
        </ul>	
    </footer>
}

export default Footer