import React from 'react'
import PropTypes from 'prop-types'

const Card = ({cardClass, imageSource}) =>
    <section className={cardClass}>
        <img src={imageSource}/>
            <div className="card-heading-text">
                <h2> Title of the image </h2>
                <p> Some text! </p>
            </div>
    </section>;

export const MainCard = () =>
    <Card cardClass="main-card" imageSource="https://www.fillmurray.com/300/200"/>;

export const OtherCard = () =>
    <Card cardClass="other-card" imageSource="https://www.fillmurray.com/g/200/100"/>;
