import React from 'react'
import autobind from 'class-autobind'
import Uploader from '../../../ui/components/uploader.jsx'

class UploaderA11y extends React.Component {

	render() {
		return <div className="uploader">
		<label className="uploader">Upload Images
			<Uploader upload={this.props.upload} />
		</label>
	&nbsp; {/* Needed to prevent div having no height when label is absolutely positioned */}
		</div>
	}

}

export default UploaderA11y
