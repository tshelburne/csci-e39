import React from 'react';
import PropTypes from 'prop-types';
import Album from '../../ui/components/album';
import Faq from '../../ui/components/faq';
import Button from '../../ui/components/button';
import autobind from 'class-autobind'

import './app.scss';

class App extends React.Component {

	constructor(...args) {
		super(...args)
		autobind(this)
		this.state = { page: 'Photo Album' }
	}

	togglePage() {
		const { page } = this.state;
		page === 'FAQ' ? this.setState({ page: 'Photo Album' }) : this.setState({ page: 'FAQ' });
	}

	render() {
		const { uploads, actions } = this.props;
		const { page } = this.state;
		var content;
		switch (page) {
			case "FAQ":
				content = <Faq />
				break;
			case "Photo Album":
			default:
				content = <Album uploads={uploads} actions={actions} />;
				break;
		}
		return (
			<body>
				<Button name={page} onClick={this.togglePage} />
				{content}
			</body>
		);
	}
}


const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

App.propTypes = {
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

export default App
