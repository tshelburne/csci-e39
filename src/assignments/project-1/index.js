import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

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

// COMPONENTS

const Img = ({ src, alt, title }) => (
	<picture>
		<img src={src} alt={alt} />
		<label>{title}</label>
	</picture>
);

const ItemCard = ({ title, src, alt }) => (
	<div className="polaroid">
		<Img title={title} src={src} alt={alt}/>
	</div>
);

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return (
		<Layout>
			<Layout.Header title="Upload Images" />
			<Layout.Content title="Completed">
				
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <div key={id}>
						{!error && <ItemCard src={url} title={name} alt="alt name"/>}
						{!!error && <p className="failure">{error}</p>}
					</div>
				})}
			
			</Layout.Content>
			<Layout.Sidebar title="In Progress">
				<label tabindex="0" for="uploader" className="uploader">Upload Files </label>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} id="uploader" className="uploader-input"/>
				{/* do not delete this uploader component */}
				
				<ul className="item-list">
					{pendingFiles.map(file => {
						const {id, name, progress} = file

						return <li key={id}>
							<progress value={progress} max="100">{progress}%</progress>
							<label>{name}</label>
						</li>
					})}
				</ul>
			</Layout.Sidebar>
			<Layout.Footer>
				<p>Francis Phiri - Project 1</p>
			</Layout.Footer>
		</Layout>
	);
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			progress: PropTypes.number,
			url: PropTypes.string,
			error: PropTypes.string,
		})).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads
