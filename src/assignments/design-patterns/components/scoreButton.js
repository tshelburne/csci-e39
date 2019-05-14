import React from 'react'


class ScoreButton extends React.Component {

    constructor(props) {
        super(props);
        let incrementFromProps =
            this.props.increment !== undefined ? parseInt(this.props.increment) : 1 //if no increment defined increase by 1
        let startingCountFromProps =
            this.props.startingCount !== undefined ? parseInt(this.props.startingCount) : 1  //Cast to integer or counting won't work.

        this.state = {
            increment: incrementFromProps,
            counter: startingCountFromProps
        }
        //needed to wire up click and state
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {

        this.setState((prevState, { counter }) => ({
            counter: prevState.counter + this.state.increment
        }))
    }

    render() {
        return (
            <React.Fragment>
                <button className="button count" onClick={this.handleClick}> {this.state.counter}</button>
            </React.Fragment>
        )
    }
}

export default ScoreButton