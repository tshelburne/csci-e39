import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #356cea 30%, #6f1dd3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(111, 135, 242, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

 const StyledComponent=(props) => {
  const { classes, name } = props;
  return <Button className={classes.root}>{name}</Button>;
}

StyledComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

export const ButtonStyled = withStyles(styles, {name:'styled-button'})(StyledComponent)