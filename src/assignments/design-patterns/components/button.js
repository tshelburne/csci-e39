// import './bootstrap'; 
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'classnames'
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

export const StyledComponent=(props) => {
  const { classes, name } = props;
  return <Button className={classes.root}>{name}</Button>;
}

StyledComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

export const ButtonStyled = withStyles(styles, {name:'styled-button'})(StyledComponent)

export const ButtonStandard = ({block, primary, secondary, disabled, children}) => {
	const classes = cx('button', {
		'mod-block': block, 
		'mod-primary': primary, 
		'mod-secondary': secondary
	})

	return (
    <button 
    className = {classes}
    disabled = {disabled} 
    >
    {children}
    </button>
    ); 
}

ButtonStandard.propTypes = {
	block:PropTypes.bool,
	primary:PropTypes.bool, 
	secondary: PropTypes.bool,
  disabled: PropTypes.bool
}


