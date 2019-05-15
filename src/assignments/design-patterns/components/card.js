import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { content, title } = props
    return (
        <div className='card'>
            <p className='cardTitle'>
                {title}
            </p>
            <span className='cardContent'>
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