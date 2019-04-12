import React from 'react'

const PolaroidGrid = ({files}) => {
    return <div class="polaroid-grid">
        {files.map(file => {
            const {id, name, url, error} = file

            return <figure key={id} class="polaroid">
                {!error && <img src={url} alt={name}/>}
                {!!error && <p className="failure">{error}</p>}
                <figcaption class="polaroid-caption">{name}</figcaption>
            </figure>
        })}
    </div>
}

export default PolaroidGrid