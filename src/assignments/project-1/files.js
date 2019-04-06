import React from 'react'

export const PendingFiles = ({files}) => {
    return <ul>
        {files.map(file => {
            const {id, name, progress} = file

            return <li key={id}>
                <label>{name}</label>
                <progress value={progress} max="100">{progress}%</progress>
            </li>
        })}
    </ul>
}

export const CompletedFiles = ({files, del}) => {
    const [success, fail] = files.reduce((out, file) => {
        let idx = file.error ? 1 : 0
        out[idx].push(file)
        return out
    }, [[], []])

    return <ul className="completed">
        {success.map(file => {
            const {id, name, url, error} = file

            return <li key={id}>
                <img src={url} style={{maxWidth: `200px`}} />
                <label>{name}</label>
            </li>
        })}
        {fail.map(file => {
            const {id, name, url, error} = file

            return <li key={id}>
                <label>{name}</label>
                <p className="failure">{error}</p>
            </li>
        })}
    </ul>
}
