import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const Notification = (props) => <Icon {...props} name="notification" />
export const Close = (props) => <Icon {...props} name="close" />

//Helper

const Icon = ({
    name, 
    inverse, 
    small, 
    medium, 
    large
}) =>
{const classes = cx(`iconic iconic=${name}`, {
    'mod-inverse': inverse,
    'iconic-small': small,
    'iconic-medium': medium,
    'iconic-large': large,
})

return <span className={classes} title={name} aria-hidden="true" />
}
Icon.propTypes = {
    name: PropTypes.string.isRequired,
    inverse: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
}