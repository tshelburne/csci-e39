import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

class Uploads extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: false
		}
	}

	render() {
		const pendingFiles = this.props.uploads.files.filter(({progress}) => progress && progress < 100);
		const completedFiles = this.props.uploads.files.filter(({progress}) => !progress);

		return <div>
			<section className="gallery-toggle">
				<GalleryToggleHeart
					onClick={() => {
						this.setState({
							isHidden: !this.state.isHidden
						});
					}}/>
			</section>
			<section className="uploading-section">
				<h1 className="title">Bookmarked art</h1>
				<p className="description">
					Welcome to your gallery page! This simple website will store images of art pieces that you find particularly compelling. 
					As you continue on your digital journey, build this archive to "bookmark" works you come across. Turn it into a happy, beautiful place.
					<br></br>
					<br></br>
					<br></br>
					Be purposeful with every addition. 
					<br></br> 
					Relish the role of curator.
					<br></br>
					<br></br>
					<br></br>
					</p>

				<h2>GROW YOUR GALLERY</h2>
				<br></br>

				<label className="uploader-button">
				<Uploader upload={this.props.actions.upload} />
				</label>
				<br></br>
				<p className="caveat">Must be &lt;500KB and an image</p>
				<br></br>

				{pendingFiles.map(file => {
					const  {id, name, progress} = file

					return <div><div className="blinking"><label className="pending-file">
							<p key={id}></p> 
							<label>Uploading: {name}</label>
							</label>
							<br></br>
						</div>
						<progress value={progress} max="100">{progress}%</progress>
					</div>
				})}
			</section>
				{!this.state.isHidden &&
					<div> 
						<div className="gallery-container">
							<h2 className="gallery-heading">LIST OF WORKS</h2>
							<br></br>	
						</div>
						<section className = "gallery-section">
						{completedFiles.map(file => {
							const {id, name, url, error} = file
							return <div className="photolist" key={id}>
								<label>{name}</label>
								{!error && <img src={url} style={{maxWidth: `200px`}} />}
								{!!error && <p className="failure">{error}</p>}
							</div>})
						}</section>
					</div>
				}
		</div>	
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
	actions: PropTypes.object.isRequired
}

class GalleryToggleHeart extends React.Component {
  constructor (props) {
 	super(props);
  }

  render () {
    return (
      <div>
      <p>Toggle to view</p>
        <button className="gallery-toggle-button"  onClick={() => this.props.onClick()} >
        </button>
      </div>
    )
  }
}

export default Uploads

