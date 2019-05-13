import React from 'react'


class CountButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: parseInt(this.props.startingCount) //Cast to integer or counting won't work.
        }
        //needed to wire up click and state
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState((prevState, { counter }) => ({
            counter: prevState.counter + 1
        }))
    }

    render() { 
        return (
            <React.Fragment>
                <button className="button" onClick={this.handleClick}> {this.state.counter}</button>
            </React.Fragment>
        )
    }
}

export default CountButton