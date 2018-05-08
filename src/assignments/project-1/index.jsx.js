import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import CompletedFilesList from "./components/completedFilesList.jsx";
import PendingFilesList from "./components/pendingFilesList.jsx";
import Faq from "./components/faq.jsx";
import PhotoAlbum from "./components/photoAlbum.jsx";

const Uploads = ({uploads, actions}) => {
	const pendingFilesList = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFilesList = uploads.files.filter(({progress}) => !progress)

	return <div className="pageWrapper">
			<div  className="header">
				<h1>Upload Images</h1>
			</div>
			<div className="photoAlbumContainer">	
				<PhotoAlbum album={PHOTOALBUM} />
			</div>
			<p>Meet Kobe! What feels like my first born son! This album provides you a glimpse of the life of Kobe.</p>
			{/* do not delete this uploader component */}
			<label className="uploader">Upload Image
				<Uploader  upload={actions.upload} />
			</label>
			{/* do not delete this uploader component */}

			<PendingFilesList pendingFilesList={pendingFilesList} />

			<CompletedFilesList completedFilesList={completedFilesList} />
			<br />
			<Faq />
			<div className="footer">
				<p>Footer</p>
			</div>
	</div>
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

const PHOTOALBUM = [
	{
		id: "1",
		imageUrl: "http://fillmurray.com/g/200/300",
    	imageAltText: "photo1",
    	copy:"photo1",
	},
	{
		id: "2",
		imageUrl: "http://fillmurray.com/g/200/300",
    	imageAltText: "photo2",
    	copy:"photo2",
	},
	{
		id: "3",
		imageUrl: "http://fillmurray.com/g/200/300",
    	imageAltText: "photo3",
    	copy:"photo3",
	},
	{
		id: "4",
		imageUrl: "http://fillmurray.com/g/200/300",
    	imageAltText: "photo4",
    	copy:"photo4",
	},
];

export default Uploads