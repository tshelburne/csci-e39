import React from 'react'

const CompletedFiles = ({completedFiles}) => {
	return <ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li>
					<span id={id}>{name}</span>
					{!error && <img src={url} style={{maxWidth: `200px`}} aria-labelledby={id}/>}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
}

export default CompletedFiles
