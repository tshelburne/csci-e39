import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// not required, imported in enclosing GuidedPractice?
// import '../../styles/guided-practice/guided-practice.css';

const ProblemStatement = ({ image, children }) => (
  <Fragment>
    <img src={image} className='image' />
    <section className='gp-statement'>{children}</section>
  </Fragment>
);

export default ProblemStatement;
