import React from 'react'
let currentLocalTime = new Date().toLocaleString();

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            date: new Date().toLocaleString([], { day: '2-digit', month: '2-digit', year: '2-digit' })
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
        return (
            <div id="clock">
                <h1>Current Local Time:</h1>
                <p className="date">{this.state.date}</p>
                <p className="time">{this.state.time}</p> 
            </div>
        )
    }
}

export default Clock







