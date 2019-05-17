import React from 'react'

export function oneByType(children, type) {
  return React.Children.toArray(children).find((child) => child.type === type)
}