import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind';

export class Event extends React.Component {

    constructor(props) {
        super(props)
        autobind(this)
    }


    render() {

        const { title, date, startTime, endTime, location, description, flag } = this.props
        const eventflag = flag || ''
        return (
            <article className={"event " + eventflag}>
                <header className="event-header">
                    <h1 className="event-title">{title}</h1>
                    <div className="event-meta-details">
                        <p className="event-date">{date}, {startTime}-{endTime}</p>
                        <p className="event-location">{location}</p>
                    </div>
                </header>
                <p className="event-description">{description}</p>
            </article>)
    }
}

export const EventMini = ({ title, date, startTime, endTime, location, description }) =>
    <Event
        flag="mini"
        title={title} date={date}
        startTime={startTime}
        endTime={endTime}
        location={location}
        description={description}
    />

EventMini.displayName = 'EventMini'

Event.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
}
