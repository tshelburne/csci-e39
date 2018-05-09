import React from 'react'
import CompletedFiles from './completedFiles.jsx'


const CompletedFilesList = ({completedFilesList}) => {
	return <div className="completedFilesContainer">
			<h2>Completed</h2>
				<ul className="completedFilesUL">
					{completedFilesList.map( (file) => 
						<CompletedFiles key={file.id} file={file} />
					)}
				</ul>
		</div>
}

export default CompletedFilesList
