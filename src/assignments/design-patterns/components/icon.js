// generic Icon not exported, only explicit icons are available

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Notifications = props => <Icon {...props} name='bell' />;
export const Close = props => <Icon {...props} name='x' />;
export const Facebook = props => <Icon {...props} name='facebook' />;
export const Twitter = props => <Icon {...props} name='twitter' />;
export const Instagram = props => <Icon {...props} name='instagram' />;

// private, only available within this module (file)
const Icon = ({ name, inverse, sm, md, lg }) => {
  const classes = cx('iconic iconic-${name}', {
    'mod-inverse': inverse,
    'iconic-sm': sm,
    'iconic-md': md,
    'iconic-lg': lg
  });

  return <span className={classes} title={name} aria-hidden='true' />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool
};
