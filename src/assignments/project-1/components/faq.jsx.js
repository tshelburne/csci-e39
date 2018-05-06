import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const FAQModal = ({open, onClose}) => (
  <div>
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Frequently Asked Questions</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <h3>What is this?</h3>
          <p>This is an image uploader application made to illustrate the use of semantic markup and grid layouts in a React codebase.</p>
        </DialogContentText>
        <DialogContentText>
          <h3>What can I do?</h3>
          <p>You can upload images from your machine to the web and then share with your friends!</p>
        </DialogContentText>
        <DialogContentText>
          <h3>Who built this?</h3>
          <p>The front-end layout and styles were built by Salil Doshi. The application structure and backend were created by Natalya and Tim Shelburne.</p>
        </DialogContentText>
        <DialogContentText>
          <h3>Where do I go from here?</h3>
          <p>That's a pretty existential question. I trust whatever you choose will be the right decision.</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

FAQModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default FAQModal
