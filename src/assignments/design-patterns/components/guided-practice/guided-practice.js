import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../../styles/guided-practice/guided-practice.css';

const GuidedPractice = ({ children, ...props }) => (
  <article className='gp-card'>
    <h1 className='gp-title'>
      Guided Practice <span className='tighten'>#{props.exNumber}</span>
    </h1>
    {children}
  </article>
);

GuidedPractice.propTypes = {
  exNumber: PropTypes.number.isRequired
};

export default GuidedPractice;
