import React from 'react'
import PropTypes from 'prop-types'

const Gallery = props => {
	return (
		<ul>
			{props.completedFiles.map(file => {
				const {id, name, url, error} = file

				return (
					<li key={id}>
						<label>{name}</label>
						{!error && <img src={url} />}
						{!!error && <p className="failure">{error}</p>}
					</li>
				)
			})}
		</ul>
	)
}

export default Gallery