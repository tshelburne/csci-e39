import React from 'react'

const Thumbnail = ({url}) => {
    return (
        <div>
            <picture>
                <source srcset={url} />
                <img src={url} alt="imgName" />
            </picture>
        </div>
    )
}

export default Thumbnail

/* CSS BELOW

picture {
	max-height: 200px;
	border: 2px solid black;
}

img {
	max-height: 200px;
	border: 2px solid orange;
}

*/

