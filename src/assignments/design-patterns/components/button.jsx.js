import React from 'react'

const Button = ({label, onClick, extraClass}) => 
  <button className={`button ${extraClass}`} onClick={onClick}>{label}</button>

export const LargeButton = ({label, onClick}) => 
  <Button label={label} onClick={onClick} extraClass='large-button' /> 

export const SmallButton = ({label, onClick}) => 
  <Button label={label} onClick={onClick} extraClass='small-button' /> 
