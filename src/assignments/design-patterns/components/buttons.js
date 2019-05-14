import React from 'react'



class CloseButton extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {button_text, ...inputProps} = this.props
            return (
                <button> {button_text} </button>
            )
    }
}


// So add some state.  This a toggle.
// basically  slightly modified.   https://reactjs.org/docs/handling-events.html

class ToggleButton extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        )
    }
}


// Here I exptend the state.  The button is showing a dice rool.

class DiceButton extends React.Component {

    constructor(props) {
        super(props)

        //console.log(props.dice_sides);

        // use default value of 6
        if(props.dice_sides){
            var mydice_sides = props.dice_sides;
        } else {
            console.log("setting to 6")
            var mydice_sides = 6;
        }
        this.state = {dice_sides: mydice_sides, dice_value:'click to roll'};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(state => ({
            dice_value: Math.floor(Math.random() * this.state.dice_sides)+1
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.dice_value}
            </button>
        )
    }
}


export  {CloseButton, ToggleButton, DiceButton }




