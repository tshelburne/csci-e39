import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = ({itemList}) => {
    return(<ul className="image-card-list">
    {itemList.map((item) => {
        const { id, imgUrl, imgAlt, cardContent} = item;
        return <li key={id}>
            <ImageCard vertical imgSrc={imgUrl} imgAlt={imgAlt}>
                {cardContent}
            </ImageCard>
        </li>
    })
    }
    </ul>);
}
export default ImageCardList;
