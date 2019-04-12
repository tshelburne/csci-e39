import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader';
import ProgressBar from '../../ui/components/progressBar';
import Album from '../../ui/components/album';
import { Link } from 'react-router-dom';

import './app.scss';

class Uploads extends React.Component {
	constructor(props) {
		super(props);
		this.showAlbum = this.showAlbum.bind(this);
		this.changePage = this.changePage.bind(this);

		this.state = {
			isShowingAlbum: false,
			currentPage: 'main'
		}
	}

	showAlbum() {
		this.setState( prevState => {
			const { isShowingAlbum } = prevState;
			return { isShowingAlbum: !isShowingAlbum };
		});
	}

	changePage() {
		this.setState( prevState => {
			const { currentPage } = prevState;
			let page = currentPage === 'main' ? { currentPage: 'faq' } : { currentPage : 'main' };
			console.log(page);
			return page;
		})
	}

	render() {
		const { uploads, actions, location } = this.props;
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100);
		const completedFiles = uploads.files.filter(({progress}) => !progress);

		

		return <div className="container">
			<header>
			{ this.state.currentPage === 'main' && (
				<React.Fragment>
					<h1>Upload Images</h1>
					<Uploader upload={actions.upload} />
				</React.Fragment>
			)}
			{ this.state.currentPage === 'faq' && <h1>Frequently Asked Questions</h1> }
			</header>

			<nav>
				<h3>Navigation</h3>
				<button className="button" onClick={this.changePage}>{ this.state.currentPage === 'main' ? 'FAQ': 'Upload'}</button>
			</nav>

			{ this.state.currentPage === 'main' && (
				<React.Fragment>
					<section>
						<h2>In Progress</h2>
						<ul>
							{pendingFiles.map(file => {
								const {id, name, progress} = file

								return <li key={id}>
									<ProgressBar name={name} progress={progress} />
								</li>
							})}
						</ul>
					</section>

					<main>
						<p>A term originally coined by Richard Dawkins in 1976, meme was coined to explain the spread of information within a culture. With the advent of the world wide web, the spread of cultural information has evolved alongside the communication medium and has even become a powerful tool in marketing, for example viral marketing or guerilla marketing. Nowadays, an image macro can have a text overlay that is shared from a social media site which then travels to other sites and continues traveling from site to site; from app to app. The dessimination of information, factual or not, has had an impact on our culture. Youth activists can spread information of corporations mistreating tribes of indigenous peoples, illegal pollution of conservation lands, cleanup efforts like #trashtag, or even affect elections. Memes have definitely come a long way from Rick Rolling and Caturdays.</p>
						<button className="button" onClick={this.showAlbum}>{this.state.isShowingAlbum ? "Get these Me-Mes out of my face" : "Show Me Me-Me Culture" }</button>
						<span className={this.state.isShowingAlbum ? '' : 'hidden'}><Album completedFiles={completedFiles} /></span>
					</main>
				</React.Fragment>
			)}

			{ this.state.currentPage === 'faq' && (
				<React.Fragment>
					<ul class='faq-list'>
						<li><h3>Memes? Really?</h3><p><a href="https://i.imgur.com/rSmbmzS.jpg">Oh yeah</a></p></li>
						<li><h3><a href="https://i.imgur.com/5VJEgwO.jpg">y tho?</a></h3><p>Artistic license</p></li>
						<li><h3>How difficult was this?</h3><p>Fairly tough since I didn't read Slack to know that the app wasn't set up for routing. Rendering based on state was recommended and much easier.</p></li>
						<li><h3>What medium has provided the most amount of content for memes?</h3><p><a href="https://spongebob.fandom.com/wiki/List_of_SpongeBob_SquarePants_Internet_phenomena/Memes">Spongebob Squarepants</a></p></li>
                	</ul>
				</React.Fragment>
			) }
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
	actions: PropTypes.object.isRequired,
	isShowingAlbum: PropTypes.bool.isRequired
}

export default Uploads
