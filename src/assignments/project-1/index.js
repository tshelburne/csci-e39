import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'



class ClickableImage extends React.Component {

  constructor(props) {
    super(props);   
    this.state = { zoomed: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('handling click');
    this.setState(state => ({
      zoomed: !state.zoomed
    }));
  }

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <img 
        src={this.props.url} 
        alt={this.props.name} 
        style={{maxWidth: this.state.zoomed ? '500px' : this.props.maxWidth }} 
        onClick={this.handleClick}
      />
    );
  }
}




const GalleryImage = ({ name, error, url, maxWidth = '200px'}) => (
  <>
    <label>{name}</label>
    {!error && <ClickableImage name={name} url={url} maxWidth={maxWidth} />}
    {!!error && <p className="failure">{error}</p>}
  </>
);




const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file
				return <li key={id}>
          <GalleryImage name={name} url={url} error={error}/>
				</li>
			})}
		</ul>
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
