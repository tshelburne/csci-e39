import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ img, name, number, position }) => {
  return (
    <figure className="player">    
      <img src={img} alt={name} />
      <div className="position-number">{number}</div>
      <figcaption>{name}<br/>{position}</figcaption>
    </figure>
  );
}

Player.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
}

export default Player;