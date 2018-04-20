import React from 'react'
import PropTypes from 'prop-types'
import GridTile from 'material-ui/GridList'
import GridList, { GridListTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

const Carousel = ({images}) => {
	return (
		<div style={styles.root}>
			<GridList cellHeight={160} className={styles.gridList} cols={3}>
	        	{images[0].map(tile => (
		          <GridListTile key={tile.id} cols={tile.cols || 1}>
		            <img src={tile.url} alt={tile.name} />
		          </GridListTile>
		        ))}
	      	</GridList>
		  </div>
		);
}



Carousel.propTypes = {
	images: PropTypes.array,
}

export default Carousel