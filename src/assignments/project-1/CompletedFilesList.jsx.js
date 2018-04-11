import React from 'react';

function CompletedFilesList(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
            {props.completedFiles.map(file => {
                const {id, name, url, error} = file

                return <li key={id}>
                    <label>{name}</label>
                    {!error && <img src={url} style={{maxWidth: `200px`}} />}
                    {!!error && <p className="failure">{error}</p>}
                </li>
            })}
            </ul>
        </div>
    )
}

export default CompletedFilesList;

