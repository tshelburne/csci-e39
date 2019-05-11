import React from 'react';

const CardItem = (props) => {
    return (
        <article className="card-item card-grid">
        {props.children}
        </article>
    );
}

export default CardItem;