import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import Button from '../../ui/components/button.jsx'
import Label from '../../ui/components/label.jsx'
import LabelHelper from '../../ui/components/labelhelper.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <main>
		<header>
				{/* do not delete this uploader component */}
				<Label/>
				<Uploader className="uploader-input" id="uploader" upload={actions.upload} />
				<LabelHelper/>
				{/* do not delete this uploader component */}
				<span>
				{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<progress value={progress} max="100">{progress}%</progress>
					<label>{name}</label>
				</li>
				})}
				</span>
		</header>
		<aside>
			</aside>
		<article>
		<h2>Images that make me contemplate</h2><p>These amazing shots taken by random people on their inspired moments are worth thosuand thoughts. Can't stop contemplating color hormony and being moved with the blue planet's beauty. Inspires me to the fullest potential. I compiled them from <a href="http://unsplash.com">unsplash</a>. May Love, Peace, Joy be Upon Humanity!</p>
		</article>
		<section>
			<ul className="image-masonry">
			{completedFiles.map(file => {
				const {id, name, url, error} = file
				
				return<li key={id}>
					{!error && <a href={url} data-lity><img src={url} alt={name} title={name} className="image-thumbnail"/></a>}
					{!!error && <p className="failure">{error}</p>}
					{/*<label>{name}</label>*/}
				</li>
			})}
			<li><Button name="load more"/></li>
		</ul>
		</section>

		<footer></footer>
	</main>
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
