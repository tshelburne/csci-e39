import React from 'react'

const CompletedFiles = ({file}) => {
    const {id, name, url, error} = file;
        return <li className="completedFilesListContainerItems" key={id}>
            <label>{name}</label>
            {!error && <img src={url} style={{maxWidth: `200px`}} />}
            {!!error && <p className="failure">{error}</p>}
        </li>
    }
    
export default CompletedFiles
