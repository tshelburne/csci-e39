class BackgroundCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "lightgray",
      bgColorChild1: "lightblue",
      bgColorChild2: "lightblue"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeChild1 = this.handleChangeChild1.bind(this);
    this.handleChangeChild2 = this.handleChangeChild2.bind(this);
  }

  handleChange(event) {
    this.setState({ bgColor: event.target.value });
  }

  handleChangeChild1(event) {
    this.setState({ bgColorChild1: event.target.value });
  }

  handleChangeChild2(event) {
    this.setState({ bgColorChild2: event.target.value });
  }

  render() {
    const compStyle = {
      backgroundColor: this.state.bgColor
    };
    return (
      <div className="comp col-xs-7 col-md-5" style={compStyle}>
        <h3>BackgroundCard</h3>
        <p>
          {`this.state = {bgColor: "`}
          <select value={this.state.value} onChange={this.handleChange}>
            <option>lightgray</option>
            <option>white</option>
          </select>
          {`"}`}
        </p>
        <p>
          {`<Child1 bgColor="`}
          <select onChange={this.handleChangeChild1}>
            <option>lightblue</option>
            <option>pink</option>
          </select>
          {`">`}
        </p>
        <p>
          {`<Child2 bgColor="`}
          <select onChange={this.handleChangeChild2}>
            <option>lightblue</option>
            <option>pink</option>
          </select>
          {`">`}
        </p>lightblue
        <Child bgColor={this.state.bgColorChild1} name="1" />
        <Child bgColor={this.state.bgColorChild2} name="2" />
      </div>
    );
  }
}