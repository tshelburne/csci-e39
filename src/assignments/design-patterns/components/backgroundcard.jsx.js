import React from 'react'
import { ForegroundCard } from './foregroundcard.jsx'
import { BiggerText, SmallerText, ResetText } from './button.jsx'

export class BackgroundCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "white",
      numCards: this.props.numCards,
      fgColors: Array(this.props.numCards).fill("lightblue"),
      fontSize: 14
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ bgColor: event.target.value });
  }

  render() {
    const compStyle = {
      backgroundColor: this.state.bgColor,
      fontSize: this.state.fontSize
    };
    return (
      <div className="comp col-xs-7 col-md-5" style={compStyle}>
        <h3>Background</h3>
        {this.props.showButton && <BiggerText
          label="Click me for bigger text!"
          onClick={() => this.setState({fontSize: this.state.fontSize * (3/2)})} />}
        {this.props.showButton && <SmallerText
          label="Click me for smaller text!"
          onClick={() => this.setState({fontSize: this.state.fontSize * (2/3)})} />}
        {this.props.showButton && <ResetText
          label="Click me for default text!"
          onClick={() => this.setState({fontSize: this.state.fontSize = 14})} />}
        <p>
          {`Select a background for ${this.props.numCards} Cards: `}
          <select value={this.state.value} onChange={this.handleChange}>
            <option>white</option>
            <option>grey</option>
            <option>black</option>
          </select>
        </p>
        {this.state.fgColors.map((color, i) => {
          return <ForegroundCard
            name={i}
            key={i}/>
        })}
      </div>
    );
  }
}