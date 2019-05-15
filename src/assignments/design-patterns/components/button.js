import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'classnames'
import Button from '@material-ui/core/Button';



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

export const ButtonGroup = (block, primary, secondary, disabled, children) => {
 const classes = cx('button', {
    'mod-block': block, 
    'mod-primary': primary, 
    'mod-secondary': secondary
  })
return (
  <React.Fragment>
   <Button variant="contained" color="primary" className={classes.button}>
        Primary
    </Button>
   <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
    </Button>
     <Button variant="contained" color="tertiary" className={classes.button}>
        Tertiary
    </Button>
     <Button variant="contained" color="tertiary" disabled className={classes.button}>
        Disabled
    </Button>
  </React.Fragment>
)}

ButtonGroup.propTypes = {
  block:PropTypes.bool,
  primary:PropTypes.bool, 
  secondary: PropTypes.bool,
  disabled: PropTypes.bool
}


