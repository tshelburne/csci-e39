import React from 'react'

// from https://gist.github.com/kerimdzhanov/7529623
/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// guided by https://inclusive-components.design/toggle-button/
// aria-pressed=false should mean the button is "off", whatever that means for its behavior
// toggleState styles the button in the corresponding way
const ToggleButton = (props) => {
	let addClasses = (props.addClasses ? props.addClasses : '');
	let labelHide = ((props.labelHide =="true") ? "sr-only" : '');
	let labelId = (props.labelId ? props.labelId : "toggle"+ getRandomInt(0, 1000000) );

	// button "off" and 2nd option is "off"
	if (props.ariaPressed === false && props.toggleOff == "2") {
		addClasses += " toggle2nd";
	}
	// button "on" and 1st option is "off"
	else if (props.ariaPressed === true && props.toggleOff == "1") {
		addClasses += " toggle2nd";
	}

	return <div className={`toggleButton ${addClasses}`}>
		<span className={`toggleButtonLabel ${labelHide}`} id={labelId}>{props.labelText}</span> 
		{/* specifying type="button" to prevent some browsers treating like a Submit */}
		<button type="button"
			aria-labelledby={props.labelId} 
			aria-pressed={props.ariaPressed}
			data-buttonState={props.dataButtonState}
			onClick={props.onClick}>
			{props.children}
		</button>
	</div>
}


export const OnOffButton = (props) => {
	return <ToggleButton 
			addClasses={props.addClasses}
			ariaPressed={props.ariaPressed}
			dataButtonState={props.dataButtonState}
			labelHide={props.labelHide}
			labelId={props.labelId} 
			labelText={props.labelText} 
			onClick={props.onClick} 
			toggleOff={props.toggleOff}>
		<span>on</span>
		<span>off</span>
	</ToggleButton>
}

export default ToggleButton
