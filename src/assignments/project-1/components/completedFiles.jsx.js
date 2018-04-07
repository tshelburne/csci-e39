import React from 'react'
import CompletedFilesItem from './completedFilesItem.jsx'


const CompletedFiles = ({completedFiles}) => {
	return <ul>
			{completedFiles.map( (file) => 
				<CompletedFilesItem key={file.id} file={file} />
			)}
		</ul>
}

export default CompletedFiles
