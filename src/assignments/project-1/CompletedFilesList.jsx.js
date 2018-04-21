import React from 'react';
import ImageItem from './ImageItem.jsx';

function CompletedFilesList({title, completedFiles, activeImage}) {

    return (
        <div>
            <h2>{title}</h2>
            <ul>
            {completedFiles.map((file, index) => {
                const {id, name, url, error} = file

                return (
                    <li key={id}>
                        <ImageItem file={file} onClick={() => activeImage=index} />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default CompletedFilesList;

