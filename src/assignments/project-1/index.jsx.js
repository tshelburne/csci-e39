import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<nav id="mainMenu">
			<a href="http://localhost:3000">Home</a>
			<a href="http://localhost:3000/faq.html">FAQs</a>
		</nav>
		<div id="heading"></div>
		<div id="description"></div>

		<header className="home">
			<h1>The Desk Archives</h1>
			<p>A directory of inspiration for interior designers to showcase their best office designs.</p>
			{/*<p>A directory of inspiration for office spaces created by interior designers.</p>*/}
		</header>

		<div className="wrapper">
			<div className="grid">
				<aside>
					<h1>The Desk Archives</h1>
					<p>Welcome to the desk archives. Have an office design you want to share? Upload one here.</p>
					{/*<p>Welcome to the desk archives. This is a directory of inspiration for interior designers to showcase their best office designs. Have an office design you want to share? Upload one here.</p>*/}

					{/* do not delete this uploader component */}
					<Uploader upload={actions.upload} />
					{/* do not delete this uploader component */}

					<h2>Uploads In Progress:</h2>
					<ul className="uploads">
						{pendingFiles.map(file => {
							const {id, name, progress} = file

							return <li key={id}>
								<label>{name}</label>
								<progress value={progress} max="100">{progress}%</progress>
							</li>
						})}
					</ul>
				</aside>

				<section className="two-thirds">
					<h2>The Latest Designs:</h2>
					<div className="image-grid">
						<ul>
							{completedFiles.map(file => {
								const {id, name, url, error} = file

								return <li key={id}>
									<label>{name}</label>
									{!error && <img src={url} alt={name}/>}
									{!!error && <p className="failure">{error}</p>}
								</li>
							})}
						</ul>
					</div>
				</section>

			</div>{/*GRID END*/}
		</div>{/*WRAP END*/}
	</div>/*RETURN END*/
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
