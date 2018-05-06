import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const CompletedFiles = ({files}) => {
	const breeds = ['pug', 'husky', 'corgie', 'pitbull'].map((breed) => {
	  const dogFiles = files.filter(({name}) => name.includes(breed));
	  return {
	    breedName: breed,
	    files: dogFiles
	  }
	});

	return <section id="completed">
    <h2>Completed</h2>
		{breeds.map(breed => {
			return <div>
				<h3>{breed.breedName} Album</h3>
				<ul>
					{breed.files.map(file => {
						const {id, name, url, error} = file

						return <li key={id}>
							<figure>
								{!error && <img src={url} style={{maxWidth: `200px`}} />}
								{!!error && <p className="failure">{error}</p>}
								<figcaption>{name}</figcaption>
							</figure>
						</li>
					})}
				</ul>
			</div>
		})}
  </section>
}

CompletedFiles.propTypes = {
	files: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		name: PropTypes.string.isRequired,
		progress: PropTypes.number,
		url: PropTypes.string,
		error: PropTypes.string,
	})).isRequired
}

export default CompletedFiles
