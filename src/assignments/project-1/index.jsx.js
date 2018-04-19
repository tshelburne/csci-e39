import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import ImageTitler from '../../ui/components/image-titler.jsx'
import AlbumTitler from '../../ui/components/album-titler.jsx'
import AlbumLightbox from '../../ui/components/lightbox.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<header>
			<div>
				<h1>A cool photo album</h1>
				<p>Here are some pictures that are very cute.</p>
			</div>
		</header>
		<main>
			<div className="upload">
				<h2>Add a new photo</h2>
				{/* do not delete this uploader component */}
				<label tabindex="0" for="uploader" className="uploader">Upload File
					<Uploader upload={actions.upload} />
					{/* do not delete this uploader component */}
				</label>
			</div>
			<div className="progress">
				<ul>
					{pendingFiles.map(file => {
						const {id, name, progress} = file

						return <li key={id}>
							<label>Loading: {name}</label>

							<progress value={progress} max="100">{progress}%</progress>
						</li>
					})}
				</ul>
			</div>
			<div className="completed">
				<AlbumTitler text={TEXT} />
				<ul className="gallery">
					{completedFiles.map(file => {
						const {id, name, url, error} = file

						return <li key={id}>
							<ImageTitler />
							{!error && <img src={url} style={{maxWidth: `200px`}} />}
							{!!error && <p className="failure">{error}</p>}
						</li>
					})}
				</ul>
			</div>
			<div>
				<AlbumLightbox images={completedFiles.map(x => x.url)} />
			</div>
		</main>
	</div>
}

const TEXT =
  {
    title: "Panda Bears",
    copy: "Please enjoy this collection of images of panda bears which I have sourced from the internet and in retrospect should have kept track of copyright and attribution for but given this is a class project hopefully I will not be sued over. As you look through these images, I invite you to contemplate what is it about pandas that makes them so irresistibly cute. Feel free to give them names if you like as well.",
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
