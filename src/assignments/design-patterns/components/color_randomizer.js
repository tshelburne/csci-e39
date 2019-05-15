import React from 'react'



//https://stackoverflow.com/questions/27864951/how-to-access-childs-state-in-react


// Here I exptend the state.  The button is showing a dice rool.

class RadomButton extends React.Component {

    constructor(props) {
        super(props)


        console.log ("BUTTON Contsructor")
        console.log(props)

        // my understanding is setting props to state isn't always a great idea.
        // But props aren't available during the call back, so I'm setting as state.

        if(props.dice_sides){
            var mydice_sides = props.dice_sides;
        } else {
            console.log("setting to 6")
            var mydice_sides = 6;
        }
        this.state= {'dice_sides': mydice_sides, 'dice_value' :0, 'keys':props.keys};

        // This binding is necessary to make `this` work in the callback
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




class ColorCard extends React.Component {

    constructor(props) {
        super(props)

        this.state={red:0, green:0, blue:0}
        // This binding is necessary to make `this` work in the callback, when called from the random number component
        this.handleFieldChange = this.handleFieldChange.bind(this);

    }

    handleFieldChange (fieldId, value)  {
        console.log("color card handleFieldChange"+fieldId+ '  ' + value);

        this.setState(state => ({ [fieldId]: value }));
        var setColorTo =  "RGBA("+ this.state.red+','+this.state.green+','+this.state.blue+",.99)";
        console.log (this.state);
        console.log (setColorTo);
        var elements = document.getElementsByClassName('color-card');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=setColorTo;
        }
    }


/*    <div style="background color: RGBA({this.state.red},{this.state.green},{this.state.blue},.99)">
                <RadomButton dice_sides="100" key="red" onChange={this.handleFieldChange} />
                <RadomButton dice_sides="100" key="green" onChange={this.handleFieldChange} />
                <RadomButton dice_sides="100" key="blue" onChange={this.handleFieldChange} />
            </div>
*/
    render() {
        //const {heading,label,image_url, ...inputProps} = this.props
// RGBA({this.state.red},{this.state.green},{this.state.blue},.99) ">
        return (
            <div className="color-card" >
                R:<RadomButton dice_sides="100" keys="red" onChange={this.handleFieldChange} /><br />
                G:<RadomButton dice_sides="100" keys="green" onChange={this.handleFieldChange} /><br />
                B:<RadomButton dice_sides="100" keys="blue" onChange={this.handleFieldChange} /><br />

                Color Card
        {this.state.red}       -          {this.state.green}                {this.state.blue}
            </div>
        )
    }
}


export  {ColorCard, RadomButton}




