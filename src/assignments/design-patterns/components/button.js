import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles/button.css';

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
