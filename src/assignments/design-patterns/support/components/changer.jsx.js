import React from 'react';
import Card from './card.jsx';

export default class Changer extends React.Component {
  constructor(props) {
    super(props);
    this.state        = { name: '' } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input className="input" type="text" onChange={ this.handleChange } />
        <Card imageLink="source.unsplash.com" imageSize="500x500" className="thumbnail" altText="sample image" imageCategory={ this.state.name } />
      </div>
    );
  }
}