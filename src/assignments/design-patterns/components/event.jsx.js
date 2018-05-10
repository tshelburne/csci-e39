import React from 'react'
import PropTypes from 'prop-types'

const Event = ({ title, date, startTime, endTime, location, description }) => (
    <article className="event">
        <header className="event-header">
            <h1 className="event-title">{title}</h1>
            <div className="event-meta-details">
                <p className="event-date">{date}, {startTime}-{endTime}</p>
                <p className="event-location">{location}</p>
            </div>
        </header>
        <p className="event-description">{description}</p>
    </article>
)

Event.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
}

export default Event