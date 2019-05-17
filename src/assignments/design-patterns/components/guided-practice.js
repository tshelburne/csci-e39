import React from 'react';
import PropTypes from 'prop-types';

const GuidedPractice = ({ exNumber, children, ...props }) => (
  <section {...props} className='section'>
    <h1 className='section--title'>Guided Practice #{exNumber}</h1>
    <div className='section--content'>{children}</div>
  </section>
);

GuidedPractice.propTypes = {
  exNumber: PropTypes.number.isRequired
};

export default GuidedPractice;
