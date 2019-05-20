import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// not required, imported in enclosing GuidedPractice?
// import '../../styles/guided-practice/guided-practice.css';

const ProblemSolutionContainer = ({ children }) => (
  <Fragment className='problem-solution-container'>{children}</Fragment>
);

export default ProblemSolutionContainer;
