import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import ProgressBar from './components/progressBar.jsx'
import FAQModal from './components/faq.jsx';
import Album from './components/album.jsx'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

class Uploads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false
    };
  }

  handleClick() {
    this.setState({
      openModal: true
    })
  }

  onClose() {
    this.setState({
      openModal: false
    })
  }

  render() {
    const {uploads, actions, classes} = this.props
    const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
    const completedFiles = uploads.files.filter(({progress}) => !progress)

    return <main>
            <FAQModal open={this.state.openModal} onClose={this.onClose.bind(this)} />
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Image Uploader
                  </Typography>
                  <Button color="inherit" variant="raised" onClick={this.handleClick.bind(this)}>FAQ</Button>
                </Toolbar>
              </AppBar>
            </div>
            <section className="upload-container">
              {/* do not delete this uploader component */}
              <Uploader upload={actions.upload} />
              {/* do not delete this uploader component */}

              <ProgressBar
                pendingFiles={pendingFiles}
              />
            </section>

            <section className="album-container">
              <Album
                images={completedFiles}
              />
            </section>
          </main>
  }
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			progress: PropTypes.number,
			url: PropTypes.string,
			error: PropTypes.string,
		})).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(Uploads)
