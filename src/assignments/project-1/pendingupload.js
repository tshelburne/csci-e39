import React from 'react'

const PendingUpload = ( { uploaddata }) => {

    console.log("from pendingupload")
    console.log(  uploaddata)
    return (

      <ul className="upload-progress">
				{uploaddata.map(file => {
					const {id, name, progress} = file
					return <li key={id} className="upload-progressbar">
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>
      )
}

export default PendingUpload;
