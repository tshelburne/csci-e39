import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = props => {
	return (
		<ul>
			{props.pendingFiles.map(file => {
				const {id, name, progress} = file

				return (
					<li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
					)
				})}
			</ul>
	)
}

export default ProgressBar