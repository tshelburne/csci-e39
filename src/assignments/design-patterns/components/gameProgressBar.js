import React from 'react'
import { isNullOrUndefined } from 'util';

class GameProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: props.progress !== undefined ? parseInt(this.props.progress) : 0,
            gameLengthSeconds: props.gameLengthSeconds !== undefined ? parseInt(this.props.gameLengthSeconds) : 200,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.addProgress(),
            1000
        )
    }
    addProgress() { 
        
        var newProgress
        if (this.state.progress < this.state.gameLengthSeconds) {
            newProgress = 1
        }
        else {
            //reset the progress
            newProgress = -this.state.progress
        }
        this.setState((prevState, { progress }) => ({
             progress: prevState.progress + newProgress
        }))
    }
    handleClick() {
        var newProgress
        if (this.state.progress < this.state.gameLengthSeconds) {
            newProgress = 15
        }
        else {
            //reset the progress
            newProgress = -this.state.progress
        }
        this.setState((prevState, { progress }) => ({
            progress: prevState.progress + newProgress
        }))

    }

    render() {
        if (this.props.test !== undefined) { 
            return (
                <React.Fragment>
                    <progress value={this.state.progress} max={this.state.gameLengthSeconds} />
                    <button className="button" onClick={this.handleClick}>Add Progress</button>
                </React.Fragment> 
            )
        }
        else {
            return (
                <React.Fragment>
                    <progress value={this.state.progress} max={this.state.gameLengthSeconds} />
                </React.Fragment>
            )
        }
    }
}

export default GameProgressBar
