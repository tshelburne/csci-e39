import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'
//import exif from 'exif-js'; //tried to use image parser as the bonus, couldnt do it on local files?


class ClickableImage extends React.Component {

  constructor(props) {
    super(props);   
    this.state = { zoomed: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('handling click');
    /* attempted to use exif-js parse to find image metadata. unfortunately it didn't work. I think with local files...
    // var img2 = document.getElementById("1");
    // debugger;
    // exif.getData(img2, function() {
    //     var allMetaData = exif.getAllTags(this);
    //     console.log('metadata', allMetaData);     
    // });
    */
    this.setState(state => ({
      zoomed: !state.zoomed
    }))
  }

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <img 
        id={this.props.id}
        className={'gallery-image'}
        src={this.props.url} 
        alt={this.props.name}         
        onClick={this.handleClick}
      />
    );
  }
}

const PendingImage = ({ progress, name }) => (
  <div className="pendingImage">
    <progress value={progress} max="100">{progress}%</progress>  
  </div>
);


const GalleryImage = ({ progress, name, error, url, maxWidth = '200px', id}) => (
  <>
    {!error && !url && progress && <PendingImage name={name} progress={progress} /> }
    {!error && url && <ClickableImage name={name} url={url} maxWidth={maxWidth} id={id} />}
    {!!error && <p className="failure">{error}</p>}
  </>
);




const Uploads = ({uploads, actions}) => {
  const allFiles = uploads.files;
	return <div className="wrapper">
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

    <div id="gallery-grid">
      <header>
        <h1>Matthew Kim</h1>
        <h2>{allFiles.length} Photos</h2>
        <p>Welcome to my photo album! I tried to make it similar to instagram. Clicking upload will placeholder boxes and refresh the image when upload is complete. Try uploading multiple photos! Enjoy!</p>
        
      </header>
      <div class="galleryList">
        {allFiles.map(file => {
          const {id, name, url, error, progress} = file
          return <GalleryImage name={name} url={url} error={error} id={id} progress={progress}/>
        })}
      </div>    
    </div>
	</div>
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

export default Uploads
