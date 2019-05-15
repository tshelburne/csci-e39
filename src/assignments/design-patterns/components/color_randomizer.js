import React from 'react'


/**
 * Color Card.  The ColorCard Tag uses two type of components (3 buttons, 1 Card)
 *
 * Clicking the buttons changes the R,G or B settings.
 *
 * In hindsight sliders would be more usefull.
 *
 */


/**
 *  Call back buttons, generate a random number and pass that with the key to the creating component.
 *
 */

class CallbackButton extends React.Component {

    constructor(props) {
        super(props)

        // my understanding is setting props to state isn't always a great idea.
        // But props aren't available during the call back, so I'm setting as state.

        if(props.dice_sides){
            var mydice_sides = props.dice_sides;
        } else {
            console.log("setting to 6")
            var mydice_sides = 6;
        }
        this.state= {'dice_sides': mydice_sides, 'dice_value' :0, 'keys':props.keys};

        // This binding is required to make `this` work in the callback.  I tried without and no dice..
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick() {
        console.log("handle Click");
        var newRoll =  Math.floor(Math.random() * this.state.dice_sides);
        this.setState(state => ({
            dice_value: newRoll
        }));
        // call the onChange function passed in

        this.props.onChange(this.state.keys,newRoll);
    }


    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.dice_value}
            </button>
        )
    }
}


/**
 *
 * The Color Card impliments the 3 button and one card part component.
 *
 */



class ColorCard extends React.Component {

    constructor(props) {
        super(props)

        this.state={red:0, green:0, blue:0}

        // This binding is necessary to make `this` work in the callback, when called from the random number component
        this.handleButtonChange = this.handleButtonChange.bind(this);

    }
    


    handleButtonChange (fieldId, value)  {
        console.log("color card handleButtonChange"+fieldId+ '  ' + value);

        this.setState(state => ({ [fieldId]: value }));
        var setColorTo =  "RGBA("+ this.state.red+','+this.state.green+','+this.state.blue+",.99)";
        console.log (this.state);
        console.log (setColorTo);

        // Use Javascript to set Class color. If multiple boxes with same class they'll all change.
        // use id based to make color card individual.

        var elements = document.getElementsByClassName('color-card');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=setColorTo;
        }
    }



    render() {
        return (
            <div className="color-card" >
                R:<CallbackButton dice_sides="100" keys="red" onChange={this.handleButtonChange} /><br />
                G:<CallbackButton dice_sides="100" keys="green" onChange={this.handleButtonChange} /><br />
                B:<CallbackButton dice_sides="100" keys="blue" onChange={this.handleButtonChange} /><br />

                Color Card:
        - R: {this.state.red} - G: {this.state.green} - B: {this.state.blue}
            </div>
        )
    }
}


export  {ColorCard, CallbackButton}




