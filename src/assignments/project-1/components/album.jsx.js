import React from 'react'
import PropTypes from 'prop-types'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 1200,
    height: 1200,
  },
  image: {
    maxWidth: 300,
    maxHeight: 300
  }
});

const Album = ({images, classes}) => (
  <div className={classes.root}>
    <GridList cellHeight={400} cellWidth={400} cols={3} className={classes.gridList}>
      {images.map((file, index) => {
        const {id, name, url, error} = file
        return <GridListTile key={id}>
                  {!error && <img classeName={classes.image} src={url} alt={name}/>}
                  {!!error && <p className="failure">{error}</p>}
                  <GridListTileBar
                    title={name}
                  />
                </GridListTile>
      })}
    </GridList>
  </div>
)

Album.propTypes = {
  images: PropTypes.array.isRequired,
}

export default withStyles(styles)(Album)
