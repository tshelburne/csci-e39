import React from 'react'

const Form = ({label}) =>
  <div className="material-form-field">
    <input required type="text" name="field-text"/>
    <label className="material-form-field-label" htmlFor="field-text">{label}</label>
  </div>


export const Field = ({label}) =>
  <Form label={label} />

Field.displayName = "Field"
