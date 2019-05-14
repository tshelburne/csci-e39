import React from 'react'

const Slider = ({sliderType, min, max, value, classes}) =>
	<div className="slidecontainer">
  		<input type={sliderType} min={min} max={max} className={classes} />
 	</div>

export default Slider

export const RoundSlider = ({sliderType, min, max, classes}) => (
	<Slider sliderType={sliderType} min={min} max={max} classes={[classes, "slider-round"].join(" ")} />
	);

export const SquareSlider = ({sliderType, min, max, classes}) => (
	<Slider sliderType={sliderType} min={min} max={max} classes={[classes, "slider-square"].join(" ")} />
	);