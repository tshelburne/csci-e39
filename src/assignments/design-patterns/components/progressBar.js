import React from 'react' 

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: parseInt(props.progress)
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var newProgress
        if (this.state.progress < 100) {
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

        return (
            <React.Fragment>
                <progress value={this.state.progress} max="100">
                </progress>
                <button className="button" onClick={this.handleClick}>Add Progress...</button>
            </React.Fragment>

        )
    }
}

export default ProgressBar