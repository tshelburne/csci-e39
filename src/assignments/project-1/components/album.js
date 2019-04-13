import React from 'react'
//import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Header2 from "./header2";



class Album extends React.Component {

    constructor() {
        super(...arguments)
        autobind(this)
    }

    render() {
        const {imgData, albumName, ...inputProps} = this.props
            return (

                <div class="album-grid">

                    <Header2 headingText={albumName}/>

                    <ul className="image-grid">

                        {imgData.map(file => {
                            const {id, name, url, description, error} = file

                            return <li key={id} className="image-card">
                                {!error && <a href={url} target="one_image"><img src={url} style={{maxWidth: `200px`}}/> </a>}
                                {!!error && <p className="failure">{error}</p>}
                                <label>{name}</label>
                                <p class="image-description"><b>{description}</b></p>

                            </li>
                        })}

                    </ul>
                </div>)
    }
}



export default Album
