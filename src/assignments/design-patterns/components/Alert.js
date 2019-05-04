import React from 'react'
import cx from 'classnames'

export const Success = (props) =>
    <Alert {...props} success warning={false} info={false} />

export const Warning = (props) =>
    <Alert {...props} success={false} warning info={false} />

export const Info = (props) =>
    <Alert {...props} success={false} warning={false} info />

const Alert = ({success, warning, info, children, ...rest}) => {
    const classes = cx({
        'alert': true,
        'mod-success': success,
        'mod-warning': warning,
        'mod-info': info
    })
    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    )
}
