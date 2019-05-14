import React from 'react'
let currentLocalTime = new Date().toLocaleString();
import cx from 'classnames'
import PropTypes from 'prop-types'

class Clock extends React.Component {
    constructor(props) {
        super(props) //call super props first before 'this' 
        const { time, date, dateTime, } = this.props
        var classes = cx(`clock`, {
            'mod-time': time,
            'mod-date': date,
            'mod-dateTime': dateTime,
        })
        this.state = {
            time: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        })
    }
    render() {
        const { time, date, dateTime, ...props } = this.props;

        Clock.propTypes = {
            time: PropTypes.bool,
            date: PropTypes.bool,
            dateTime: PropTypes.bool,
        }

        //finish converting to a class. .. 
        return (
            <React.Fragment>
                <p className="time">{this.state.time}</p>
            </React.Fragment>
        )
    }
}


export default Clock
export const ClockArea = ({ children, ...props }) => {

    return <div {...props} id="clock">
        <h1>Current:</h1>
        {children}
    </div>


}


export const ClockDate = (props) => {
    return <div>
        <p className="date">{new Date().toLocaleString([], { day: '2-digit', month: '2-digit', year: '2-digit' })} </p>
    </div>
}

export const ClockTime = Clock



