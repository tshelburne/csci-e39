import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

import Nav from '../../assignments/project-1/navigation.jsx'
import Progress from '../../assignments/project-1/progress.jsx'

import AppBar from 'material-ui/AppBar'
import Snackbar from 'material-ui/Snackbar';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import IconButton from 'material-ui/IconButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {GridList, GridTile} from 'material-ui/GridList';


const Uploads = ({uploads, actions}) => {

	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const currentRoute = "all";

	const styles = {
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	  }
	};

	return <div className="hg">

		<Nav currentRoute={currentRoute}></Nav>

		 <header className="hg__header">
			<AppBar 
				title="FotoAsh" 
				iconElementRight={<Uploader upload={actions.upload} />}/>
		</header>

		<main className="hg__main">

			<Progress pendingFiles={pendingFiles} style={{marginBottom: '10px'}}/>

			
			 {!completedFiles.length ?
			    <Card>
			    	<CardHeader title="Welcome to your foto library"/>
					<CardText>To get started, upload some fotos and then share them with your friends.</CardText>
				</Card>
				:
				<div style={styles.root}>
			    	<GridList
				      cols={3}
				      cellHeight={200}
				      padding={10}>
						{completedFiles.map(file => {

							const {id, name, url, error} = file

							if (!error){
							return <GridTile key={id}       
							          title={!!error ? error : name}
							          subtitle={url}
							          actionIcon={<IconButton><ActionFavoriteBorder color="white" /></IconButton>}>

							          <img src={url} />

							       </GridTile>
							}
							else {
							return	<Snackbar key={id}   
							          open={true}
							          message={error}
							          autoHideDuration={4000}/>
							}
						})}
			    	</GridList>
		    	</div>
		    }
		  	

		</main>
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
