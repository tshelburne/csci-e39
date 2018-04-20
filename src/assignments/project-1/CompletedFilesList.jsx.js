import React from 'react';

function CompletedFilesList(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
            {props.completedFiles.map(file => {
                const {id, name, url, error} = file

                return <li key={id}>
                    {!error &&
                        <div className="photograph">
                            <img src={url} onClick={props.onImageClick} alt={name} title={name} />
                        </div>
                    }
                    {!!error &&
                        <div className="error">
                            <label>ERROR: {name}</label><br />
                            <p className="failure">{error}</p>
                        </div>
                    }
                </li>
            })}
            </ul>
        </div>
    )
}

export default CompletedFilesList;

