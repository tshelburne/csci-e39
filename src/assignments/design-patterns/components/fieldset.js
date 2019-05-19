import React from 'react';
import './styles/fieldset.css';

const Fieldset = ({ legend, children }) => (
  <fieldset>
    <legend>{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;

// functional components don't need to import Component?
// if capturing events (on focus, etc), maybe need class components (life-cycle?)
