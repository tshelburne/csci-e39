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

const StyledComponent=(props) => {
  const { classes, name } = props;
  return <Button className={classes.root}>{name}</Button>;
}

StyledComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

export const ButtonStyle = withStyles(styles, {name:'styled-button'})(StyledComponent)

const ButtonStandard = ({block, primary, secondary, ...props}) => {
	const classes = cx('button', {
		'mod-block': block, 
		'mod-primary': primary, 
		'mod-secondary': secondary
	})

	return <button {...props} className = {classes} />
}

ButtonStandard.propTypes = {
	block:PropTypes.bool,
	primary:PropTypes.bool, 
	secondary: PropTypes.bool
}

export default ButtonStandard

//export const ButtonGroup = ({children, ...props}) =>