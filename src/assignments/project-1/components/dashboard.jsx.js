import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../../ui/components/uploader.jsx'
import Grid from 'material-ui/Grid'
import Carousel from './carousel.jsx'

const Dashboard = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <Grid>
			<Grid>
				<h1>Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}

				<h2>In Progress</h2>
				<ul>
					{pendingFiles.map(file => {
						const {id, name, progress} = file

						return <li key={id}>
							<label>{name}</label>
							<progress value={progress} max="100">{progress}%</progress>
						</li>
					})}
				</ul>
			</Grid>
			<Grid>
				<h2>Completed</h2>
				<Carousel images={[completedFiles]} />
			</Grid>
		</Grid>
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Dashboard.propTypes = {
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
	}),
	actions: PropTypes.object,
}

export default Dashboard

/* <ul>
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id}>
						<label>{name}</label>
						{!error && <img src={url} style={{maxWidth: `200px`}} />}
						{!!error && <p className="failure">{error}</p>}
					</li>
				})}
			</ul> */