import React from 'react';

const CardItem = (props) => {
    return (
        <article className="card-item">
        {props.children}
        </article>
    );
}

export default CardItem;