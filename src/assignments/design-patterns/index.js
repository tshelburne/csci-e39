import React from 'react';
import PropTypes from 'prop-types';
import Example, { ActiveCodeProvider } from './support/example';

import TextBlock from './components/textblock';
import Section from './components/section';
import Button, {
  ButtonGroup,
  ConfirmButton,
  CancelButton,
  RoundedButtonGroup
} from './components/button';
import CloseIcon from './components/close-icon';
import Fieldset from './components/fieldset';

import './app.scss';

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className='style-guide'>
      <h1>My Pattern Library!</h1>

      <Example title='<ButtonGroups and Buttons>'>
        <Fieldset legend='Default Button'>
          <ButtonGroup>
            <Button>Plain old button</Button>
            <Button block primary>
              Success!
            </Button>
            <Button block secondary>
              Oops!
            </Button>
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

      {/* <Example title='<Section>'>
        <Section title='Section title goes here...'>
          <TextBlock>
            <p>this is some text</p>
          </TextBlock>
        </Section>
      </Example>

      <Example>
        <CloseIcon />
      </Example> */}
    </div>
  </ActiveCodeProvider>
);

export default PatternLibrary;
