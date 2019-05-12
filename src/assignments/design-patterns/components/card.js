import React from 'react'



class Card extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {heading,label,image_url, ...inputProps} = this.props
            return (
                <div className="image-card">
                    <h3>{heading}</h3>
                    {image_url &&<a href={image_url} target="one_image"><img src={image_url} style={{maxWidth: `200px`}}/></a>}
                    <label>{label}</label>
                    <hr/>
                    {this.props.children}
                </div>
            )
    }
}

export default Card
