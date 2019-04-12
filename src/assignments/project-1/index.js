import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Button from './button'
import Polaroid from './polaroid'
import Img from './img'
import Nav from './nav'
import {ITEM1, ITEM2, ITEM3, ITEM4, ITEM5} from './data/items'
import {LOGO} from './data/items'

import './app.scss'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const itemsArray = [ITEM1, ITEM2, ITEM3, ITEM4, ITEM5]

	return <div>
		<Nav link1="About Space Camera" link2="Image Gallery" link3="FAQ"/>
		
		<header className="box header">
			<Img className={LOGO.className} src={LOGO.src} alt={LOGO.alt} />
			<h1>Welcome to Space Camera</h1>
		</header>

		<div className = "container">
		<h2>Upload Images</h2>
		{/* do not delete this uploader component */}
		<Uploader className = "uploader" upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		{/* repeat progress to see styling*/}
		<progress className ="progress" value="33" max="100">33%</progress>
		<ul>
			
			{pendingFiles.map(file => {
				const {id, name, progress} = file


				return <li key={id}>
					<label>{name}</label>
					<progress className ="progress" value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
		
		<div className="polaroid-grid">
				{itemsArray.map((item) => 
					<Polaroid image={item.image} style={item.style} order={item.order} caption={item.caption} onClick={() => this.setState({mainItem: item})}/>			
				)}
		</div>
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


export default Uploads
