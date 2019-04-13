import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Greeting from './greeting'
import Project from './project'
import Btn from './btn'

import './app.scss'




const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)





	return <div>

		<React.Fragment>
			<Project number="1" application="Upload Images App"/>
		</React.Fragment>

		<React.Fragment>
			<Greeting name="World" greeting="Hello" special />
			<Greeting name="Me" greeting= "Yay" />
			<Greeting name="You" greeting="Yo" />
		</React.Fragment>


		<div className="example-container">


		<h2>Button</h2>
			<Btn />
		</div>


		<div className="example-container">
			<h2>Upload Images</h2>
			<form>
				{/* do not delete this uploader component */}
				<Uploader id="file-form" upload={actions.upload} className="uploader file-form" />
				{/* do not delete this uploader component */}
				<label for="file-form" className="uploader"><span></span><strong>Upload Files</strong></label>
			</form>
		</div>

		<div className="example-container">

			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress id="p" value={progress} value="33" max="100">{progress}%</progress>
					</li>
				})}


				{/*<progress id="p" value="33" max="100"></progress>*/}

			</ul>			


		</div>

		<section className="container">
			<h2>Completed</h2>
			<h2>A Little About Me</h2>
      <p>
        I want to share my portfolio of jewelry pieces I've created using various techniques. I began dabbling in metalsmithing at the De Cordova museum where I worked with sterling silver sheet, tubs and wire construction. I came to the realization that this trade requires a lot of tools and a studio space separate from living quarters.
      </p>
      <p>
        An easier rout for me was to design jewelry using Swarovski Crystals and sterling silver findings that I could purchase on the web. I found myself wanting to reshape these clasp and connector findings and delved further into metalsmithing.
      </p>
      <p>
        This further delving brought me to Mass College of Art where I took a construction in base and precious materials class with Donna Veverka. Here I could use their open studio space as long as I was enrolled. I spent long hot days annealing copper wire and drawing it through plates for a thinner guage just so I could use the draw tongs and bench.
      </p>
      <p>
        Then I discovered Metalwerx in Waltham where they use this very innovative material call precious metal clay (PMC). It's fine silver mixed with a gluten to give it the consistency of clay. The gluten burns off in the kiln and what's left is fine silver. Can you differenciate between pieces made using traditional silver smithing techniques (sterling silver) and PMC (fine silver)?
      </p>
			<ul className="gallery-grid item-list">

						{completedFiles.map(file => {
							const {id, name, url, error} = file
								return <li className="item-card" key={id}>
								     <a href="#">

										<div >
											<picture className="item-card-image">
											{!error && <img src={url} style={{maxWidth: `100%`}} />}
											{!!error && <p className="failure">{error}</p>}
											</picture>
										<label className="item-card-title">{name}</label>										
										</div>
									</a>
								</li>
						})}
			</ul>
		</section>

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
