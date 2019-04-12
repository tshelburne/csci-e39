import React from 'react'
//import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Header2 from "./header2";



class AlbumUpload extends React.Component {

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
                            const {id, name, progress} = file

                            return <li key={id}>
                                <label>{name}</label>
                                <progress value={progress} max="100">{progress}%</progress>
                            </li>
                        })}

                    </ul>
                </div>)
    }
}



export default AlbumUpload
