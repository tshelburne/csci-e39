import React from 'react'



class Header2 extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {headingText, ...inputProps} = this.props
            return (
                <h3>{headingText}</h3>
            )
    }
}

export default Header2
