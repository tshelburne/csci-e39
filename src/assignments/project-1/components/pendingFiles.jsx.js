import React from 'react'

		const PendingFiles = ({file}) => {
			const {id, name, progress} = file;
			return <li key={id}>
				<label>{name}</label>
				<progress value={progress} max="100">{progress}%</progress>
			</li>
		}

export default PendingFiles