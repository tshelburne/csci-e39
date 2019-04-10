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
                    <h2>{albumName}</h2>
                    <ul className="image-grid">
                        {imgData.map(file => {
                            const {id, name, url, error} = file

                            return <li key={id} className="image-card">
                                {!error && <img src={url} style={{maxWidth: `200px`}}/>}
                                {!!error && <p className="failure">{error}</p>}
                                <label>{name}</label>

                            </li>
                        })}
                    </ul>
                </div>)
    }
}



export default Album
