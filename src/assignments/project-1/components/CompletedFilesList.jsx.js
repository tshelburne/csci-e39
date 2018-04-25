import React from 'react'
import CompletedFile from './completedFile.jsx'


const CompletedFiles = ({completedFiles}) => {
	return <div className="completedFiles">
				<ul className="cf-ul">
					{completedFile.map( (file) => 
						<CompletedFile key={file.id} file={file} />
					)}
				</ul>
		</div>
}

export default CompletedFilesList