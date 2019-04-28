import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Banner extends React.Component {

    constructor() {
        super(...arguments)
        autobind(this)
    }
    render() {
        const { ...props } = this.props
        return (
            <React.Fragment>

                <h1 className='banner'>Photos from {props.first} {props.last}</h1>
                <div class="uname">(Username: {props.uname}) </div>

            </React.Fragment>)
    }

}

export default Banner
