import React from 'react'

const Picture = ({src, alt}) => {

	return <picture className="item-card-image">
				<img src={src} alt={alt}/>
			</picture>
}
export default Picture