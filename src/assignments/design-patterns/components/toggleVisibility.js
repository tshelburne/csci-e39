import React from 'react'
import PropTypes from 'prop-types'

// I don't know how to make this work. It has something to do with state, and I'm probably not calling it properly...

function ToggleVisibility(className) {
        var svg = document.getElementsByClassName(className);
    	svg.style.visibility = svg.style.visibility == "hidden" ? "visible" : "hidden";
    }

export default ToggleVisibility;