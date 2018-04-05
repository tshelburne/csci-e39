import React from 'react'

const CompletedFiles = ({completedFiles}) => {
	return <ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
}

export default CompletedFiles
