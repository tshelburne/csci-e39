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
        return <h1 className='banner'>Some photos from {props.first} {props.last} ({props.uname})</h1>
    }

}

export default Banner
