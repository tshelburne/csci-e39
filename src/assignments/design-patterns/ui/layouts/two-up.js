import React from 'react'

//import {oneByType} from '.ui/util/react'

// LAYOUT
const TwoUpLayout = ({children}) => (
  <div className="layout-two-up">
    {oneByType(children, TwoUpLayout.Header)}
    {oneByType(children, TwoUpLayout.Content)}
    {oneByType(children, TwoUpLayout.Sidebar)}
    {oneByType(children, TwoUpLayout.Footer)}
  </div>    
)

TwoUpLayout.Header = ({title, children}) => (
  <header className="layout-two-up--header">
    <h1 class="main-heading">{title}</h1>
      {children}
  </header>
)

TwoUpLayout.Content = ({children}) => (
   <main className="layout-two-up--main">
     {children}
   </main>
)

TwoUpLayout.Sidebar = ({children}) => (
  <aside className="layout-two-up--sidebar">
    {children}
  </aside>
)

TwoUpLayout.Footer = ({children}) => (
  <footer className="layout-two-up--footer">
    {children}
  </footer>
)

export default TwoUpLayout