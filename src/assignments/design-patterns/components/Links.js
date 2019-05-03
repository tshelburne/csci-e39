import React from 'react'

export const Link = ({ linkText, linkAddress, title, blockDisplay }) => {
    return (
        <a href={linkAddress} title={title} className={blockDisplay ? `block-link` : ``}>
            {linkText}
        </a>
    )

}

export const EmailLink = ({ emailAddress, linkText, title, blockDisplay }) => {
    return (
        <React.Fragment>
            <a href={`mailto:${emailAddress}`} title={title} className={blockDisplay ? `block-link` : ``}>
                {linkText} <span className="email-icon" aria-hidden></span>
            </a>
        </React.Fragment>
    )
}