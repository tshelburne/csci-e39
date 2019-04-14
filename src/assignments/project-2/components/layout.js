import React from 'react'

const Layout = ({children}) => (
	<div className="layout-grid">
		{oneByType(children, Layout.Header)}
		{oneByType(children, Layout.Content)}
		{oneByType(children, Layout.Sidebar)}
		{oneByType(children, Layout.Footer)}
	</div>
)

Layout.Header = ({title, children}) => (
	<header className="layout--header">
		<h1 className="main-heading">{title}</h1>
		{children}
	</header>
)

Layout.Content = ({title, children}) => (
	<main className="layout--main">
		{title && <h2 className="heading">{title}</h2>}
		<div className="main-content">
			{children}
		</div>
	</main>
)

Layout.Sidebar = ({title, children}) => (
	<aside className="layout--sidebar">
		{title && <h2 className="heading">{title}</h2>}
		{children}
	</aside>
)

Layout.Footer = ({children}) => (
	<footer className="layout--footer">
		{children}
	</footer>
)

function oneByType(children, type) {
	return React.Children.toArray(children).find((child) => child.type === type)
}

export default Layout