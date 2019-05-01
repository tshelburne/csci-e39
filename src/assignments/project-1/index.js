import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Clock from './clock'
import Greeting from './greeting'




import './app.scss'




const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const name= "Jordan"

	return <div className="uploader-input file-form">

	<Greeting name="Ready Player One"/>



	
	<div>"Let's get retro, this is a throwback to the 80s! A lot of great things were made in the 80s, including myself. The coolest hipster trend in my opinion is retro 80s style. Therefore, let us all become hipsters and travel back in time lol. If you feel yourself wanting to say... I didn't even realize that beards were trendy. I just feel drawn to them, naturally, I guess. That's okay we love you anyway. And etc...Yada, Yada, Yada "</div>

<div> 
<button> Wow, Cool</button>
</div>


<div> 
<h2> It's {name}!</h2>
</div>



		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h4> #Muscles </h4>
       <h4> Display:Flex ;) </h4>

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


