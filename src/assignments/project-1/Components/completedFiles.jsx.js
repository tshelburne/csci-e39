import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

//image and copy

class CompletedFile extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render(){
    	return <div className='completedFileList'>
    		<figure className='completedFile'>
    			<img src={this.prop.imgUrl} alt={this.prop.imgAltAttribute} />
    			<figcaption lassName="completedFileCopy">{this.props.completedFileCopy}</figcaption>
    		</figure>
    	</div>
    }
}
    CompletedFile.PropTypes = {
    	imgUrl: PropTypes.string.isRequired,
    	imgAltAttribute: PropTypes.string.isRequired,
    	completedFileCopy: PropTypes.string.isRequired
    }

export default completedFile