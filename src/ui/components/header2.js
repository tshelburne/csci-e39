import React from 'react'



class Header2 extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {headingText, ...inputProps} = this.props
            return (
                <h2>{headingText}</h2>
            )
    }
}

export default Header2
