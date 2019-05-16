import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const Notification = (props) => <Icon {...props} name="bell" />
export const Close = (props) => <Icon {...props} name="x"/>
export const Save = (props) => <Icon {...props} name="folder"/>
export const Left = (props) => <Icon {...props} name="chevron-left"/>
export const Right = (props) => <Icon {...props} name="chevron-right"/>

const Icon = ({name, inverse, sm, md, lg}) => {
  const classes = cx('oi oi-'+ name, {
    'mod-inverse': inverse,
    'iconic-sm': sm,
    'iconic-md': md,
    'iconic-lg': lg,
  })

  return <span className={classes} title={name} aria-hidden="true"/>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool
}
