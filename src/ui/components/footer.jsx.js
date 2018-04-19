import React from 'react'

class Footer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Thanks for submitting, ' + this.state.value + "!");
    event.preventDefault();
  }


  render() { 
    return <div className = "contact-form">
    <a href ="#">{this.props.item1}</a><a href= "#">{this.props.item2}</a><a href = "#">{this.props.item3}</a>
    <p>Feel free to contact us at 123-456-789 or submit the form below</p>
    	<form onSubmit={this.handleSubmit}>
    Name: <input type="text" value = {this.state.value} onChange={this.handleChange} name="name" />
    E-mail: <input type="text" name="email" />
    Message: <input className ="msg-block" type="text" name="message" />
    <button className = "btn" type="submit">Send your message</button>
  </form>
    </div>;
  }
}

export default Footer