import React from 'react'

class AlbumTitler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {textVisible : true};

    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(prevState => ({
      textVisible: !prevState.textVisible
    }));
   }

  render() {
    const {text} = this.props
    const {textVisible} = this.state
    const buttonText = this.state.textVisible ? 'Hide text' : 'Show text';


    return (
      <div>
        <h2>{text.title}</h2>
        {textVisible && <p>{text.copy}</p>}
        <button onClick={this.toggleText}>{buttonText}</button>
      </div>
    );
  }
}

export default AlbumTitler
