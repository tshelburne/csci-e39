import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { content, title } = props
    return (
        <div className='card'>
            <p className='card-title'>
                {title}
            </p>
            <span className='card-content'>
                {content}
            </span>
        </div>
    );
}

Card.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Card;