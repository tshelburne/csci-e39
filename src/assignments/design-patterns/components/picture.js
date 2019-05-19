import React from 'react'


const Picture = ({src, alt}) => {

	return <picture className="item-card">
				<img src={src} alt={alt}/>
			</picture>
}
export default Picture