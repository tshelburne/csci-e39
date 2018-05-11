import React from 'react'

class ToggleButton extends React.Component {
    
    constructor( props ){
        super( props )
        this.state = { show : false };
        
        this.display = this.display.bind(this)
    }
    
    display  (){
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
            <div className="toggleButtonContent">
                <button className="toggleButton" onClick={ this.display}>Toggle Button</button>
                <br /><br />
                { this.state.show && <ToggleContent /> }
            </div>
        );
    }
}

class ToggleContent extends React.Component{
    render(){
        return(
            <div className="toggledContentContainer">
                <p>Now you see me!</p>
            </div>
        )
    }
}

export default ToggleButton;