import React from 'react'
import PendingFile from './PendingFile.jsx'

function PendingFilesList(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.pendingFiles.map(file => {
                    const { id } = file

                    return <li key={id}>
                        <PendingFile file={file} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PendingFilesList;
    