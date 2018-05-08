import React from 'react'
import CompletedFiles from './completedFiles.jsx'

const PendingFilesList = ({pendingFilesList}) => {
	return <div className="pendingFilesContainer">
			<h2>In Progress</h2>
				<ul className="pendingFilesUL">
					{pendingFilesList.map( (file) => 
						<PendingFiles key={file.id} file={file} />
					)}
				</ul>
			</div>
}

export default PendingFilesList