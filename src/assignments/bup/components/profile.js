import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Profile extends React.Component {

    constructor() {
        super(...arguments)
        autobind(this)

        this.state = {
            isToggleOn: false
        }
    }

    // https://reactjs.org/docs/handling-events.html
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const { ...props } = this.props
        const specialClass = this.state.isToggledOn ? 'show' : 'hide'
        return (

            <React.Fragment>
                <div className={specialClass}>
                    {props.about}
                </div>

            </React.Fragment>
        )
    }

}

export default Profile
