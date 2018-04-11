import React from 'react';

function PendingFilesList(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.pendingFiles.map(file => {
                    const {id, name, progress} = file

                    return <li key={id}>
                        <label>{name}</label>
                        <progress value={progress} max="100">{progress}%</progress>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PendingFilesList;
    