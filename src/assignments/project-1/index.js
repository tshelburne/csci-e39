import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Button from './button'
import Header from './header'
import Picture from './picture'
import Inputbox from './inputbox'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="grid-container">
		<div className="copy-text">
			<p>Upload your favourite photoes by clicking on the button and create your albulm! </p>
		</div>
		<Header title="Upload Images" />
			<div className="grid-upload">
				<Button name="Upload Files" id="upload" />
				<Inputbox onChangeHandler={handleInputBoxChange}/>
				{/* do not delete this uploader component */}
				<Uploader className="uploader-input" id="upload" upload={actions.upload} />
				{/* do not delete this uploader component */}
			</div>
		<Header title="In Progress" />
		<ul>
			{pendingFiles.length==0 && <progress value="0" data-label="0% Complete" max="100"></progress>}
			{pendingFiles.map(file => {
					
					const {id, className, progress} = file

					console.log("progress:"+parseInt(progress, 10))
					return <li key={id}>
						<label>{name}</label>
						{pendingFiles.length>0 && <progress value={parseInt(progress, 10)} data-label={parseInt(progress, 10)+"% Complete"} max="100">{progress}%</progress>}
					</li>
				})}
		</ul>

		<Header title="Completed" /> 
		<ul className="completed">
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li className="item-card" key={id}>
					{!error && <Picture src={url} alt={name}/>}
					{!!error && <p className="failure">{error}</p>}
					{!altText=="" && <p className="image-label">{altText}</p>}
					{!!altText=="" && <p className="image-label">{name}</p>}
				</li>
			})}
		</ul>
	</div>
}

let altText;
const handleInputBoxChange = (e) => {
	altText = e.target.value;
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