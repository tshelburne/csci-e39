import React from 'react'



class InitialBlock extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {name, ...inputProps} = this.props

        console.log ("Name" + name)
        var firstLetter = name.charAt(0).toUpperCase();

        return (
            <label className="friend-name">{firstLetter}</label>

        )
    }
}

export default InitialBlock