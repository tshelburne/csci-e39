import React from 'react'

const Toggle = ({checked}) =>
  <div className="toggle-container">
    <input name="toggle" type="checkbox" checked={checked}/>
    <label className="toggle-label" htmlFor="toggle"></label>
  </div>

export const Switch = ({checked}) =>
  <Toggle checked={checked}/>

Switch.displayName = "Switch"
