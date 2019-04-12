import React from 'react'
import Album from "../components/album";

const TwoUpLayout = ({children}) => (
    <div className="layout-two-up">
        {oneByType(children, TwoUpLayout.Content)}
        {oneByType(children, TwoUpLayout.Sidebar)}
    </div>
)


TwoUpLayout.Content = ({title, children}) => (
    <main className="layout-two-up--main">
        {title && <h1 className="heading">{title}</h1>}
        {children}
    </main>
)

TwoUpLayout.Sidebar = ({children}) => (
    <aside className="layout-two-up--sidebar">
        {children}
    </aside>
)

export default TwoUpLayout
