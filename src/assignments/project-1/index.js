import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Button from './button'
import Polaroid from './polaroid'
import {ITEM1, ITEM2, ITEM3, ITEM4, ITEM5} from './data/items'

import './app.scss'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const itemsArray = [ITEM1, ITEM2, ITEM3, ITEM4, ITEM5]

	return <div>
		<Button label ="Primary" importance ="primary"/>
		<h1>Upload Images</h1>
		
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ul>
			<progress className ="progress" value="33" max="100">33%</progress>
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
