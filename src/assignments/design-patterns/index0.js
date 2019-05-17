import React from 'react';
import PropTypes from 'prop-types';
import Example from './support/example';
import TextBlock from './components/textblock';
import GuidedPractice from './components/guided-practice';

import './app.scss';

class PatternLibrary extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { activeCode: `react` };
  }
  getChildContext() {
    return {
      activeCode: this.state.activeCode,
      setActiveCode: activeCode => this.setState({ activeCode })
    };
  }

  render() {
    return (
      <div className='style-guide'>
        <h1>My Pattern Library!</h1>
        <Example title='<TextBox>'>
          <TextBlock title='Hello, Whirled'>testing</TextBlock>
        </Example>
        <GuidedPractice exNumber='1'>content</GuidedPractice>
        hello
      </div>
    );
  }
}

PatternLibrary.childContextTypes = {
  activeCode: PropTypes.string,

  setActiveCode: PropTypes.func
};

export default PatternLibrary;
