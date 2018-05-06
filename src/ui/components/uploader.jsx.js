import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import FileUpload from '@material-ui/icons/FileUpload';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import classNames from 'classnames';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
	input: {
    display: 'none',
  },
});

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file)
		}
	}

	render() {
		const {classes, upload, ...inputProps} = this.props
		return<div>
						<input className={classes.input} id="uploader" multiple type="file" onChange={this.handleFiles} />
						<label htmlFor="uploader">
							<Button className={classes.button} color="primary" component="span" variant="raised">
								Upload
								<FileUpload className={classes.rightIcon} />
							</Button>
						</label>
					</div>
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Uploader);
