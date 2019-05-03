
import React from 'react'

function Section ({ title, styleName, children }) {
    return (
        <section className={styleName}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
export default Section