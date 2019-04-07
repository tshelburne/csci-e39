import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

const Uploads = ({ pendingFiles, completedFiles, actions }) => {
	const pendingFilesTotal = pendingFiles.length;

	return (
		<React.Fragment>
			<label for="uploader" class="uploader"><i className="fas fa-camera-retro" aria-hidden="true"></i> Add Photos</label>
			<Uploader id="uploader" className="uploader-input" upload={actions.upload} />

			{pendingFilesTotal > 0 && <h2>Photos In Progress</h2>}
			<ul className="in-progress-imgs">
				{pendingFiles.map(file => {
					const { id, name, progress } = file
					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>
			
			<ul className="completed-imgs">
				{completedFiles.map(file => {
					const { id, name, url, error } = file
					const labelName = name.substr(0, name.lastIndexOf('.')) || name; //remove file extension

					return <li key={id}>
						{!error && <img src={url} alt={labelName} />}
						{!!error && <p className="failure">{error}</p>}
						<label>{labelName}</label>
					</li>
				})
				}
			</ul>
		</React.Fragment>);
}

const Faq = () => {
	return (
		<React.Fragment>
			<h2>Frequently Asked Questions</h2>
			<dl className="faq-list">
				<dt>Who are you?</dt>
				<dd>Hi! I'm Zoraida.</dd>
				<dt>Are you from California?</dt>
				<dd>Nope. I live in Boston. Grew up in Puerto Rico.</dd>
				<dt>When did you take these pictures?</dt>
				<dd>On September 2018, during a California vacation. :)</dd>
				<dt>Do you have more pictures?</dt>
				<dd>Oh yes, I took a ton of pictures from this trip, and I also just love photography.</dd>
				<dt>What camera did you use for these?</dt>
				<dd>Canon Rebel T6i DSLR</dd>
			</dl>
		</React.Fragment>);
}

class Tabs extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.defaultTab
		};
	}

	handleClick(pageName) {
		this.setState({ activeTab: pageName })
		this.props.handleTabClick(pageName)
	}

	render() {
		const tabs = this.props.tabsList;
		return (
			<ul className="tabs">
				{tabs.map((tab, key) => {
					const { name, iconName } = tab;
					return (
						<li key={key}>
							<button
								onClick={() => this.handleClick(name)}
								className={this.state.activeTab === name ? "active" : ""} >
								<i className={iconName} aria-hidden="true"></i> {name}
							</button>
						</li>)
				})
				}
			</ul>
		)
	}
}

class AlbumApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: "album"
		};
	}

	setPage(page) {
		this.setState({ currentPage: page })
	}

	render() {
		const pendingFiles = this.props.uploads.files.filter(({ progress }) => progress && progress < 100)
		const completedFiles = this.props.uploads.files.filter(({ progress }) => !progress)
		const tabsList = [
			{ name: "album", iconName: "fas fa-th" },
			{ name: "faq", inconName: "fas fa-question" }
		]

		return (
			<React.Fragment>
				<div className="wrapper">
					<header>
						<h1>California Days</h1>
					</header>

					<nav>
						<Tabs defaultTab="album" handleTabClick={this.setPage.bind(this)} tabsList={tabsList} />
					</nav>
					<main>
						{this.state.currentPage === "album" &&
							<Uploads pendingFiles={pendingFiles} completedFiles={completedFiles} actions={this.props.actions} />}
						{this.state.currentPage === "faq" && <Faq />}
					</main>
				</div>
			</React.Fragment>
		)
	}
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})



AlbumApp.propTypes = {
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

export default AlbumApp;
