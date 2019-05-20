import React from 'react';
// import PropTypes from 'prop-types';
import Example, { ActiveCodeProvider } from './support/example';

import TextBlock from './components/textblock';
import Section from './components/section';
import Button, {
  ButtonGroup,
  ConfirmButton,
  CancelButton,
  RoundedButtonGroup
} from './components/button';
// import CloseIcon from './components/close-icon';
import Fieldset from './components/fieldset';
import GuidedPractice from './components/guided-practice/guided-practice';
import ProblemStatement from './components/guided-practice/problem-statement';
import ProblemSolutionContainer from './components/guided-practice/problem-solution-container';

import './app.scss';
import './styles/index.css';

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className='style-guide'>
      <h1>My Pattern Library!</h1>
      <Example title='<GuidedPractice>'>
        <GuidedPractice exNumber='1'>
          <ProblemStatement image='http://eduk8r.org/statics/gp/09cf/images/09cf-gp-1a.png'>
            <p className='warning'>
              The $ signs in the following text are to render the enclosed text
              as (beautifully styled in LaTeX) mathematics. Usually, this is
              simply a matter of including some links to the katex library in
              the head element of index.html. Unfortunately, this is not so
              straightforward using react. Top of my todo list for later in the
              week.
            </p>
            <p>
              $BD$ and $ABC$ are rigid members. There are pinned connections at
              $A$ and $D$, a frictionless collar at $B$ (able to move freely
              along member $ABC$) and a frictionless rocker at $C$.
            </p>
            <p>
              Determine the reactions (magnitude and direction) at $A$, $B$, $C$
              and $D$.
            </p>
            <Button>Show solution</Button>
            <ProblemSolutionContainer>
              <p>alkdjflskdjf asldkf;jasfldjk</p>
            </ProblemSolutionContainer>
          </ProblemStatement>
        </GuidedPractice>
      </Example>
      <Example title='<ButtonGroups and Buttons>'>
        <Fieldset legend='Default Button'>
          <ButtonGroup>
            <Button>Plain old button</Button>
            <Button primary>Success!</Button>
            <Button secondary>Oops!</Button>
            <ConfirmButton>OK</ConfirmButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonGroup>
        </Fieldset>

        <Fieldset legend='Arrow button, using CSS class'>
          <ButtonGroup arrow>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
          </ButtonGroup>
        </Fieldset>

        <Fieldset legend='RoundedButtonGroup component'>
          <RoundedButtonGroup>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>10</Button>
          </RoundedButtonGroup>
        </Fieldset>
      </Example>
      <Example title='<TextBox>'>
        <TextBlock>
          <p>Let's see some math: $$ x^2 $$</p>
        </TextBlock>
      </Example>

      {/* <Example>
        <CloseIcon />
      </Example> */}
    </div>
  </ActiveCodeProvider>
);

export default PatternLibrary;
