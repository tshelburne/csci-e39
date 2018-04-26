import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {isButtonActive: false, isActive: "button-is-deactivated", disabledOrNah:"disabled"};
		// This binding is necessary to make `this` work in the callback (from the react docs)
    this.handleCheck = this.handleCheck.bind(this);
	}
  
  // code from the react docs: https://reactjs.org/docs/handling-events.html
  handleCheck() {
    this.setState(prevState => ({
      isButtonActive: !prevState.isButtonActive,
    }));
  }

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file)
		}
	}

	render() {
		const {upload, ...inputProps} = this.props
		return <form id="uploadForm">
  		  <aside>
          <h3>{"Upload an image and add it to the public image library."}</h3>
          <p>{"By sharing an image to the public gallery you are surrendering your intellectual property rights to that image in perpetuity, and accept that it may be used by any other community member for any purpose, commercial or personal."}</p>
          <label tabIndex="0" htmlFor="terms-conditions" className="visually-hidden">Accept the terms and conditions. Required.</label>
          <input type="checkbox" id="terms-conditions" onClick={this.handleCheck} /> {"I'm totally cool with that!"}
        </aside>
		      <div className="uploader-wrapper">
    		    <label tabIndex="1" htmlFor="uploader" className={'uploader-label' + ' ' + (this.state.isButtonActive ? "button-is-activated" : "button-is-deactivated")}>Upload image</label>
    		    <input {...inputProps} multiple type="file" id="uploader" disabled={this.state.isButtonActive ? "" : "disabled"} onChange={this.handleFiles} />
  		    </div>
		  </form>
	}

}
/*

export const Terms = (activated, buttonState, ...inputProps) => (
  <aside>
  <h3>{"Upload an image and add it to the public image library."}</h3>
  <p>{"By sharing an image to the public gallery you accept that it may be used by any other community member for any purpose, commercial or personal."}</p>
  <label tabIndex="0" htmlFor="terms-conditions" className="visually-hidden">Accept the terms and conditions. Required.</label>
  <input type="checkbox" id="terms-conditions" onClick={handleCheck} /> {"I agree to the terms & conditions"}
  </aside>
);
*/

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader

