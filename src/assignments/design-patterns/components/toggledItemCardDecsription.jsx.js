import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class ToggleItemCardDescription extends React.Component {
    
    constructor( props ){
        super( props )
        autobind(this);
        this.state = { show : false };
        
        this.display = this.display.bind(this);

    }
    
    display  (){
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        const {imageUrl, imageAltText, buttonCopy, buttonUrl} = this.props;

        return (
            <div className="toggleItemCardContent">
                <div className="toggleItemCardImage">
                    <img src={imageUrl} alt={imageAltText}/>
                </div>
                <br />
                <div className="toggleItemCardButton">
                <button className="toggleButton"onClick={ this.display}>Toggle Description</button>
                <br /><br />
                </div>
                { this.state.show && <ToggleDescription /> }
            </div>
        );
    }
}

class ToggleDescription extends React.Component{
    constructor( props ){
        super( props )
    }

    render() {
        const {imageDescription} = this.props;

        return (
            <div className="toggleDescriptionContainer">
                    <p>{imageDescription} </p>
            </div>
        );
    }
}

ToggleItemCardDescription.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    buttonCopy: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired
}

ToggleDescription.PropTypes = {
    imageDescription: PropTypes.string.isRequired  
}

export default ToggleItemCardDescription;