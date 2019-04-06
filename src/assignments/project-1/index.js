import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

const Layout = ({children}) => (
	<div className="">
		{oneByType(children, Layout.Header)}
		{oneByType(children, Layout.Content)}
		{oneByType(children, Layout.Sidebar)}
		{oneByType(children, Layout.Footer)}
	</div>
)

Layout.Header = ({title, children}) => (
	<header className="">
		<h1 className="">{title}</h1>
		{children}
	</header>
)

Layout.Content = ({title, children}) => (
	<main className="">
		{title && <h1 className="">{title}</h1>}
		{children}
	</main>
)

Layout.Sidebar = ({children}) => (
	<aside className="">
		{children}
	</aside>
)

Layout.Footer = ({children}) => (
	<footer className="">
		{children}
	</footer>
)

function oneByType(children, type) {
	return React.Children.toArray(children).find((child) => child.type === type)
}

// COMPONENTS

const Img = ({ className, small, large, alt }) => (
	<picture className={className}>
		<img src={large} alt={alt} />
	</picture>
);

const ItemCard = ({ image, title, alt }) => (

	<div className="">

	</div>
);

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return (
		<Layout>
			<Layout.Header title="Upload Images" />
			<Layout.Content title="Completed">

			</Layout.Content>
			<Layout.Sidebar>
				<h1 className="">In Progress</h1>
			
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
