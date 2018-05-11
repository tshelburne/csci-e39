import React from 'react'

export class ForegroundCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: this.props.bgColor || 'dimgray'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ bgColor: event.target.value });
  }

  render() {
    const compStyleChild1 = {
      backgroundColor: this.state.bgColor
    };

    return (
      <div className="comp col-xs-12" style={compStyleChild1}>
        <h4>Child {this.props.name}</h4>
        <p>
            {`Select a color: `}
            <select onChange={this.handleChange}>
              <option>dimgray</option>
              <option>gainsboro</option>
              <option>firebrick</option>
              <option>lightcoral</option>
              <option>darkorange</option>
              <option>lightsalmon</option>
              <option>darkkhaki</option>
              <option>palegoldenrod</option>
              <option>rebeccapurple</option>
              <option>thistle</option>
              <option>darkolivegreen</option>
              <option>lightgreen</option>
              <option>steelblue</option>
              <option>lightsteelblue</option>
              <option>saddlebrown</option>
              <option>rosybrown</option>
            </select>
          </p>
      </div>
    );
  }
}