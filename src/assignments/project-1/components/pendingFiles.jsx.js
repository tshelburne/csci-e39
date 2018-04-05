import React from 'react'

const PendingFiles = ({pendingFiles}) => {
	return <div>
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
	</div>
}

export default PendingFiles
