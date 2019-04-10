import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Deleter from '../../ui/components/deleter'

import './app.scss'

/* COMPONENTS */


function Header(props) {

  return 	(
				<header className="hero">
					<h2>{props.headerText}</h2>
										
					<p> Welcome to my birthday party album.  This is me with my wife, Natasha, and our two
						children, Zayden and Violet.  We went to <a href="https://www.nickandtonis.com/">Nick and Toni's </a>
						restaurant in East Hampton.
						Dinner was good enough but the tartufo desert was to die for--best we have ever eaten.
						Next time, we will skip dinner and just eat tartufo!
					</p>

				</header>
			);
}

function Photo(props) {
	
  var imgStyle={
	maxWidth: props.size == "zoom-in" ? 150 + "px" : 250 + "px",
	cursor: props.size
  };
  
  console.log(imgStyle.width);
  
  return 	(
				<li className="photo-and-label" key={props.id}>
					<figure>
						{props.size == "zoom-in" && <figcaption className="filename">{props.name}</figcaption>}
						{!props.error && <img src={props.url} style={imgStyle} className="photo" />}
						{!!props.error && <p className="failure">{props.error}</p>}
					</figure>						
				</li>
			);
}

function Footer(props) {

  return 	(
				<footer className="footer">
					<h2>{props.footerText}</h2>
				</footer>
			);
}



class Zoomer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isZoomed: false};
  }

  handleClick() {
    this.setState(state => ({
      isZoomed: !state.isZoomed
    }));
  }

  render() {
    const size = this.state.isZoomed ? "zoom-out" : "zoom-in";
	
    return (
		<button onClick={this.handleClick}>
			<Photo  id={this.props.id} name={this.props.name} url={this.props.url} error={this.props.error} size={size} />
		</button>	
    );
  }
}

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	
	return <div className="example-container">
	    
		<Header headerText="Birthday Album" />
	  	
		<section className="control-section">
			
			<button className="uploader-container">
				Upload a Photo
				<Uploader className="uploader-input" upload={actions.upload} />
			</button>
	
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file
	
					return <h2> Uploading {pendingFiles.length}) Files </h2>
					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>
			
			<p> {completedFiles.length} Files in Album</p>
			
	    </section>
	   
		<section className="photos">
			
			<ul className="photo-grid">
				{completedFiles.map(file => {
					const {id, name, url, error} = file
	
					return <Zoomer id={id} name={name} url={url} error={error} />
				})}
			</ul>
		</section>
		
		<Footer  footerText="Goodbye and see you next birthday!"/>
		
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
