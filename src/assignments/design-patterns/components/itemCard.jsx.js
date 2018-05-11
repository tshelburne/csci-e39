import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'



class ItemCard extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {imageUrl, imageAltText, buttonCopy, buttonUrl} = this.props;


        return <div className="itemCardContainer">
                    <div className="itemCardImage">
                        <img src={imageUrl} alt={imageAltText}/>
                    </div>
                    <div className="itemCardButton">
                        <a type="button" className="itemCardLink" href={buttonUrl}>{buttonCopy}</a>
                    </div>
               </div>
    }
}

ItemCard.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    buttonCopy: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired
}

export default ItemCard


