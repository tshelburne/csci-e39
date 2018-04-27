import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const Rating = ({value, max, blankIcon, filledIcon}) => (
	<div className="rating">
		{Array.apply(0, Array(max)).map(function (x, i) {
			return <FontAwesome name={i < value ? filledIcon : blankIcon} />;
		})}
	</div>
)

Rating.propTypes = {
	value: PropTypes.number,
	max: PropTypes.number,
	blankIcon: PropTypes.string,
	filledIcon: PropTypes.string,
	spin: PropTypes.bool
}

export const StarRating = ({value, max}) =>
	<Rating value={value} max={max} blankIcon='star-o' filledIcon='star'/>

export const HeartRating = ({value, max}) =>
	<Rating value={value} max={max} blankIcon='heart-o' filledIcon='heart'/>

export const ThumbRating = ({value, max}) =>
	<Rating value={value} max={max} blankIcon='thumbs-o-up' filledIcon='thumbs-up'/>
