import React from 'react';
import PropTypes from 'prop-types';
import Example, { ActiveCodeProvider } from './support/example';
import TextBlock from './components/textblock';

import './app.scss';

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className='style-guide'>
      <h1>My Pattern Library!</h1>

      <Example title='My Special <section>'>
        <TextBlock>hi2</TextBlock>
      </Example>

      {/* <Example title='My Special <span>'>
        <span className='just-testing'>HELLO SPAN</span>
      </Example> */}

      <Example title='My Special <h4>'>
        <h4 className='just-testing'>HELLO HEADING</h4>
      </Example>
    </div>
  </ActiveCodeProvider>
);

export default PatternLibrary;
