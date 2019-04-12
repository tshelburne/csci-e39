import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	// ref: https://www.robinwieruch.de/react-pass-props-to-component/
	const message = 'I am just hacking my way through this, and looking in all of the directories to try to understand the structure and how everything relates. I\'ve tried a lot of things that don\'t work.'
	// code modified below from: ref: https://stackoverflow.com/questions/35351706/how-to-render-a-multi-line-text-string-in-react
	const badCode = '/*\n.uploader-input {\nwidth: 0.1px;\nheight: 0.1px;\nopacity: 0;\noverflow: hidden;\nposition: absolute;\nz-index: -1;\n}\n.uploader-input + label * {\npointer-events: none;\n}\n*/'

	return <div>

		<section className='section-container'>
			<h1>React Components</h1>
			<article>
				<p>{message}</p>
			</article>
			<button className='button'>Nothing I've tried really works with this.</button>
		</section>

		<section className='section-container'>
			<h2>Upload Images</h2>

			{/* do not delete this uploader component */}
			<Uploader className='uploader-input' upload={actions.upload} />
			{/* do not delete this uploader component */}

			<article>
				<p>The code I used in the codepen is not working here. I tried to change it by a number of methods, but I haven't been able to fix it. The application breaks when I try to hide the input button. In /components/_uploader.css, you will find the following code:</p>
				<aside className='code-container'>
					<code>
						{badCode.split('\n').map((i,key) => {
					    	return <p key={key}>{i}</p>;
					    })}
					</code>
				</aside>
			</article>
		</section>

		<section className='section-container'>
			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress className='progress-bar' value={progress} max='100'>{progress}%</progress>

					</li>
				})}
			</ul>
		</section>

		<section className='section-container'>
			<h2>Completed</h2>
			<article>
				<p>The images used for this album were photographed in Paris. Oh l&agrave; l&agrave;&hellip;</p>
				<p>You can find the images in \project-1\album\</p>
			</article>
			<ul className='silly-list'>
				<div className='polaroid-grid'>

					{completedFiles.map(file => {
						const {id, name, url, error} = file

						return <li className='polaroid' key={id}>
							<label>{name}</label>
							<label>{id}</label>
							{!error && <img src={url} style={{maxWidth: `200px`}} />}
							{!!error && <p className='failure'>{error}</p>}
						</li>
						})}

				</div>
			</ul>
		</section>
		<section className='section-container'>
			<article className='faq-container'>
				<h2>FAQ</h2>
				<p className='faq-question'>How does this thing work?</p>
				<p className='faq-answer'>Well, that's a very good question. From a user's standpoint, you just have to upload images, a progress bar indicates that they are loading at lightning speed, and the images are displayed in an album.</p>
				<p className='faq-answer'>From a newbie, basically clueless,  React developer's standpoint&hellip;</p>
				<p className='faq-question'>What does the button do?</p>
				<p className='faq-answer'>It does nothing. I tried using it in several ways, and I couldn't really get it to work with anything I wanted it to do.</p>
				<p className='faq-question'>What did you want the button to do?</p>
				<p className='faq-answer'>Well, first, I thought I'd use it to link to a FAQ page. (That's when I was under the impression that the FAQ page had to be a separate &#91;.JS]) Boy, was that fun. Here are some of the references I checked-out:</p>
				<ul className='faq-link-list'>
					<li><a href='https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button/49439893'>Wrapping a react-router Link in an html button</a></li>
					<li><a href='https://reacttraining.com/react-router/web/api/withRouter/'>What is &#123; withRouter &#125; ?</a></li>
					<li><a href='https://www.npmjs.com/package/react-router'>I need react-router.</a></li>
				</ul> 
				<p className='faq-answer'>I installed react-router, then I saw that it was installed as a dependency in &#91;PACKAGE.JSON&#93;, but I didn't understand that I had installed it, because when I checked git status, it showed that it needed to be added to the commit, so I thought it was already installed, and that I just didn't know how to access it properly. So, I checked-out react-router from git. Then, later I looked at &#91;PACKAGE.JSON&#93;, and it was gone. I guess Tim hadn't installed it, and I would have had to have run the build after I installed it in order for it to work. Anyhoo, &#91;LINKBUTTON.JS&#93; is in ui\components\ --I was trying to get it to work, so I could understand how it works.</p>
				<p className='faq-answer'>Then I figured-out that I didn't know how to properly code &#91;FAQ.JS&#93; anyway, so it wouldn't matter whether I could link to it or not.</p>
				<p className='faq-question'>What else did you try to do with the button?</p>
				<p className='faq-answer'>Well, it would be nice to use it to delete the images in the album, and I saw some stuff about that on slack, poked around and gave up on that idea. I'm too fried to provide an exhaustive list, but notably, I tried to link it to an image. Here are some of the references I checked-out:</p>
				<ul className='faq-link-list'>
					<li><a href='https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css'>Can I hack something up in CSS to get this thing to do something? Anything? Maybe.</a></li>
					<li><a href='https://stackoverflow.com/questions/34582405/react-wont-load-local-images'>Can I even get a local image to appear? Nope.</a></li>
					<li><a href='https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react?rq=1'>Can I pass a local image as a prop? Didn't work. I probably need to map it or something, but I don't know how to do that.</a></li>
					<li><a href='https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files'>Um, I saw a bunch of stuff about Webpack, and that's installed, so maybe this will work. Nope.</a></li>
				</ul>
				<p className='faq-question'>What do the colors mean as you add the images to the album?</p>
				<p className='faq-answer'>Absolutely nothing. The images are added as list elements, and they are styled with meaningless code from the silly list Codepen assignment.</p>
				<p className='faq-question'>Why is this thing so ugly?</p>
				<p className='faq-answer'>I spent an inordinate amount of time trying to do stuff with this thing that is beyond my current set of skills; instead of making it look pretty.</p>
				<p className='faq-question'>Can you tell me anything else about the album?</p>
				<p className='faq-answer'>Well, I can tell you this, the images blur on hover, but nothing else really happens, unless you have added at least seven images, and try hovering over the sixth one&hellip; ooooh awwwww&hellip; exciting, no? (I thought about changing sizes on click, adding alt tags, sorting them into groups&hellip; Didn't happen.)</p>				
			</article>
		</section>

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