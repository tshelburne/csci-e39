import React from 'react'

const Button = ({label, extraClass, onClick}) =>
  <button className={'button ${extraClass}'} onClick={onClick}>{label}</button>

export const HelloButton = ({label, onClick}) =>
  <Button label={label} onClick={onClick} extraClass="hello" />

HelloButton.displayName = "Hello"

export const ByeButton = ({label, onClick}) =>
  <Button label={label} onClick={onClick} extraClass="hello" />

ByeButton.displayName = "Goodbye"
