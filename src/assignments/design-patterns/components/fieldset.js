import React from 'react';
import '../styles/fieldset.css';

const Fieldset = ({ legend, children }) => (
  <fieldset>
    <legend>{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
