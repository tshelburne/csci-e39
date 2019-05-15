import React from 'react'



class CloseButton extends React.Component {


    constructor() {
        super(...arguments)
    }


    render() {
        return (
            <button> X </button>
        )
    }
}



class DoSomethingButton extends React.Component {


    constructor(props) {
        super(props)
        console.log(props)
        this.doSomething = this.doSomething.bind(this);
    }


    // Run the function passed in as a prop
    doSomething(){
        console.log("in DoSomething");
        console.log(this.props);
        alert("click");

    }

    render() {
        const {button_text, ...inputProps} = this.props
            return (
                <button onClick={this.doSomething} > {button_text} </button>
            )
    }
}


// So add some state.  This a toggle.
// basically  slightly modified.   https://reactjs.org/docs/handling-events.html

class LimitedToggleButton extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {isToggleOn: true, clickCount:0};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick() {

        this.setState(state => ({
            clickCount: this.state.clickCount+1
        }));

        // switch the state if the button hasen't been overused
        if (this.state.clickCount<4){
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
            }));

        } else {
            alert ("enough already  "+ this.state.clickCount + " times is too much")
        }
    }


    render() {
        return(
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'on' : 'off'}
        </button>
        )
    }
}


/**
 *
 * A self contained button that generates a random number when clicked.
 *
 *
 */

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
        console.log(this.props)
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


export  {CloseButton, LimitedToggleButton, DiceButton, DoSomethingButton }




