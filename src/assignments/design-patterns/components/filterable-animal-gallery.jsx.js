import React from 'react'
import Toggle from './toggle.jsx'
import AnimalGallery from './animal-gallery.jsx'
import PropTypes from 'prop-types'

class FilterableAnimalGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideBear: false,
    };

    this.handleBearToggle = this.handleBearToggle.bind(this);
  }

  handleBearToggle(hideBear) {
    this.setState({
      hideBear: hideBear
    });
  }

  render() {
    return(
      <div>
        <Toggle
          hideBear={this.state.hideBear}
          onBearToggleChange={this.handleBearToggle}
        />
        <AnimalGallery
          animals={this.props.animals}
          hideBear={this.state.hideBear}
        />
      </div>
    );
  }
}

FilterableAnimalGallery.propTypes = {
  animals: PropTypes.array.isRequired,
}

export default FilterableAnimalGallery
