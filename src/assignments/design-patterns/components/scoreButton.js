import React from 'react'

class ScoreButton extends React.Component {

    constructor(props) {
        super(props);
        let incrementFromProps =
            this.props.increment !== undefined ? parseInt(this.props.increment) : 1 //if no increment defined increase by 1
        let startingScoreFromProps =
            this.props.startingScore !== undefined ? parseInt(this.props.startingScore) : 0  //Cast to integer or counting won't work.
        let maxScoreFromProps =
            this.props.maxScore !== undefined ? parseInt(this.props.maxScore) : 9999 //Cast to integer or counting won't work.

        this.state = {
            increment: incrementFromProps,
            score: startingScoreFromProps,
            maxScore: maxScoreFromProps
        }
        //needed to wire up click and state
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var newScore
        if (this.state.score >= this.state.maxScore) 
            {
                 
                newScore = 0
        }
        else {
            //reset the progress
            newScore =  this.state.score + this.state.increment
        }
        this.setState((prevState, { score }) => ({ 
            score: newScore
        }))
    }

    render() {
        return (
          
                <p>
                <button className="button score" onClick={this.handleClick}>Score: {this.state.score}</button>
                </p> 
        )
    }
}

export default ScoreButton
export const TouchDownScoreButton = (props) => 
<ScoreButton  {...props} increment="6" startingScore="0" /> 
export const TennisScoreButton = (props) =>  
<ScoreButton  {...props} increment="15" startingScore="0" maxScore="45" /> 
