import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-image-gallery";
import Lightbox from "react-images";

class Completed extends React.Component {
	constructor() {
		super();
		this.state = { curImg: 0, openLightbox: true };
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
			return { src: item.url };
		});
		console.log("pending files in Completed are ", items);
		let customGallery = (
			<div className="album-container">
				<h2 className="centered-title">Completed</h2>
				<ul className="completed-list">
					{this.props.completedFiles.map(file => {
						const { id, name, url, error } = file;

						return (
							<li className="photo" key={id}>
								<label className="photo-label">{name}</label>
								{!error && (
									<img
										className="photo-src"
										src={url}
										style={{ maxWidth: `200px` }}
									/>
								)}
								{!!error && <p className="failure">{error}</p>}
							</li>
						);
					})}
				</ul>
			</div>
		);
		return (
			<div>
				<Lightbox
					images={items}
					onClose={this.closeLightbox}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					curImg={this.state.curImg}
					isOpen={this.state.openLightbox}
				/>
			</div>
		);
	}
}

Completed.propTypes = {
	completedFiles: PropTypes.array.isRequired
};

export default Completed;
