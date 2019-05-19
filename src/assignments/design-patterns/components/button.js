import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles/button.css';

// Button component as per Tim's video
const Button = ({ block, primary, secondary, ...props }) => {
  const classes = cx('button', {
    'mod-block': block,
    'mod-primary': primary,
    'mod-secondary': secondary
  });
  return <button {...props} className={classes} />;
};

Button.propTypes = {
  block: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
  // onClick: PropTypes.func.isRequired
};

export default Button;

export const ConfirmButton = props => (
  <Button {...props} primary secondary={false} />
);

export const CancelButton = props => (
  <Button {...props} secondary primary={false} />
);

// Tim's ButtonGroup component, modified by me to style the mod-bg-arrow class
export const ButtonGroup = ({ children, arrow, ...props }) => {
  const classes = cx('button-group', {
    'mod-bg-arrow': arrow
  });
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

// Separate component export to satisfy assignment specs
export const RoundedButtonGroup = ({ children, ...props }) => {
  return (
    <div {...props} className='rounded-button-group'>
      {children}
    </div>
  );
};
