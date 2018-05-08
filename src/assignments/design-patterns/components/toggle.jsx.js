import React from 'react'
import PropTypes from 'prop-types'

class Toggle extends React.Component {

  constructor(props) {
     super(props);
     this.handleBearToggle = this.handleBearToggle.bind(this);
   }

   handleBearToggle(e) {
     this.props.onBearToggleChange(e.target.checked);
   }

   render() {
     return (
       <form>
         <label htmlFor="bear-toggle">
           <input
             id="bear-toggle"
             type="checkbox"
             checked={this.props.hideBear}
             onClick={this.handleBearToggle}
           />
           I'm scared of bears please don't show them to me.
         </label>
       </form>
     );
   }
 }

export default Toggle
