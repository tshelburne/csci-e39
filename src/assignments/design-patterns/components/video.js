import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ name, src, caption, thumbnail }) => {
  return (
    <div className="video">
    <div className="title">{name}</div>    
    <video width="320" height="240" controls poster={thumbnail}>
      <source src={src}/>
      Your browser does not support the video tag.
    </video>
    <div className={'caption'}>{caption}</div>
    </div>
  );
}


export const VideoGroup = ({children, ...props}) => 
  <div {...props} className="video-group">{children}</div>

Video.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default Video;