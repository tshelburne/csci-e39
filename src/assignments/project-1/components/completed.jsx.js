import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-grid-gallery";
import Lightbox from "react-images";

class Completed extends React.Component {
	constructor() {
		super();
		this.state = { curImg: 0, openLightbox: true, custom: true };
	}

	switchView() {
		this.setState({ custom: !this.state.custom });
	}
	openLightbox(event, obj) {
		this.setState({
			curImg: obj.index,
			openLightbox: true
		});
	}
	closeLightbox() {
		this.setState({
			curImg: 0,
			openLightbox: false
		});
	}
	gotoPrevious() {
		this.setState({
			curImg: this.state.curImg - 1
		});
	}
	gotoNext() {
		this.setState({
			curImg: this.state.curImg + 1
		});
	}
	render() {
		let items = this.props.completedFiles.map(item => {
			return {
				src: item.url,
				thumbnail: item.url
			};
		});
		console.log(
			"pending files in Completed are ",
			this.props.completedFiles
		);
		let customGallery = (
			<div className="album-container">
				<button
					className="custom-button"
					onClick={() => this.switchView()}
				>
					Switch Gallery View
				</button>
				<h2 className="centered-title">Completed</h2>
				{this.state.custom ? (
					<ul className="completed-list">
						{this.props.completedFiles.map(file => {
							const { id, name, url, error } = file;

							return (
								<li className="photo" key={id}>
									<label className="photo-label">
										{name}
									</label>
									{!error && (
										<img
											className="photo-src"
											src={url}
											style={{ maxWidth: `200px` }}
										/>
									)}
									{!!error && (
										<p className="failure">{error}</p>
									)}
								</li>
							);
						})}
					</ul>
				) : (
					<div>
						<h3>Click on any image to open a carousel view.</h3>
						<Gallery
							numcols={3}
							images={items}
							containerWidth="600px"
						/>
					</div>
				)}
			</div>
		);
		if (this.props.completedFiles.length > 0) {
			return customGallery;
		} else {
			return <h3>Upload pictures to see the magic.</h3>;
		}
	}
}

Completed.propTypes = {
	completedFiles: PropTypes.array.isRequired
};

export default Completed;
