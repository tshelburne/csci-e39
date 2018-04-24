import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Uploader from '../../ui/components/uploader.jsx'
import Heading from '../../ui/components/heading.jsx'
import MenuItem from '../../ui/components/menuItem.jsx'
import Foot from '../../ui/components/footer.jsx'

const pageTitle = "FAQs";
const pageDesc = "Have questions? We've got answers.";
const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<nav id="mainMenu">
			<MenuItem url='http://localhost:3000/' link="Home" />
			<a href="http://localhost:3000/faq">FAQs</a>
		</nav>

		<header className="home">
			<Heading pageTitle={pageTitle} pageDesc={pageDesc}/>
		</header>

		<div className="wrapper">
			<div className="grid">
				<section className="faqs">
					<h2>FAQs</h2>
				</section>
			</div>{/*GRID END*/}
		</div>{/*WRAP END*/}

		<Foot copyright='Design by Leisy Vidal' />
	</div>/*RETURN END*/
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
