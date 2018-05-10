import React from 'react'

function toggleFunction() {
	var element=document.getElementById('hamburger-container');
	element.classList.toggle('clickToClose');
}

export const Hamburger = (  ) => 

    <div id="hamburger-container" className="transform" onClick={() => toggleFunction() }>
      <div className="x-forward transform"></div>
      <div className="x-back transform"></div>
    </div>

