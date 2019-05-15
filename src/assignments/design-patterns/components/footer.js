import React from 'react'

const Footer = (props) => {
    return <footer>
        <ul>
            <li>
                <a href={"/"+props.element1}>{props.element1.toUpperCase()}</a>
            </li>
            <li>
                <a href={"/"+props.element2}>{props.element2.toUpperCase()}</a>
            </li>
            <li>
                <a href={"/"+props.element3}>{props.element3.toUpperCase()}</a>
            </li>
            <li>
                <a href={"/"+props.element4}>{props.element4.toUpperCase()}</a>
            </li>
        </ul>	
    </footer>
}

export default Footer