

import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Greeting from './greeting' 

/* import Photogrid from './photgrid 
	import Clock from 'clock'
	import Listitems from './fancylist'
	import App from app.js

*/

import './app.scss'


/*

<h2> Top Ten Places to Visit in the World</div> 

Return <div>
<div className="list Countainer ListItmes" id="list"></div>;
 
return React.createElement('div', {id: 'photogrid'},</>

/* return < Button id=button >
		<button onClick={this.clicked}>#Muscles<button>
		onPress={() => console.log('Pressed!')}
		<div/>;
	}*/



const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
	<Greeting name="Jordan" />
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		


		<h2>#Muscles</h2>

		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>



		<h2>Display: Flex</h2>
		



		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
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

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );

  }
}



export default Uploads






