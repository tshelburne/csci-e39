import React from 'react'



class InitialBlock extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {name, cn, ...inputProps} = this.props

        console.log ("Name" + name)
        var firstLetter = name.charAt(0).toUpperCase();
        console.log ("fl" + firstLetter)
        return (
            <label className={cn}> {firstLetter}</label>

        )
    }
}

export default InitialBlock