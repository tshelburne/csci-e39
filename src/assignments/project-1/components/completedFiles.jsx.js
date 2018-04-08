import React from 'react'
import CompletedFilesItem from './completedFilesItem.jsx'


const CompletedFiles = ({completedFiles}) => {
	return <div className="completedFiles">
				<div className="images-uploaded">Images uploaded: <span>{completedFiles.length}</span></div>
				<ul>
					{completedFiles.map( (file) => 
						<CompletedFilesItem key={file.id} file={file} />
					)}
				</ul>
		</div>
}

export default CompletedFiles
