import React from 'react'
import PropTypes from 'prop-types'
import GridTile from 'material-ui/GridList'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
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
			<GridList cellHeight={400} className={styles.gridList} cols={3}>
	        	{images[0].map(tile => (
              <GridListTile key={tile.id}>
                <img src={tile.url} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>Uploaded on: {convertTimeToDate(tile.createdAt)}</span>}
                />
              </GridListTile>
		        ))}
	      	</GridList>
		  </div>
		);
}

function convertTimeToDate(time) {
  console.log(time);
  var toConvert = new Date(time*1000);

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var time = months[toConvert.getMonth()] + ' ' + toConvert.getDate() + ' ' + toConvert.getHours() + ':' + toConvert.getMinutes() + ':' + toConvert.getSeconds();

  return time;
}

Carousel.propTypes = {
	images: PropTypes.array,
}

export default Carousel