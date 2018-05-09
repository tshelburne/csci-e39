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
       <div>
         <p>If you are scared of bears, use the toggle to hide bears from the list.</p>
         <form className="toggle">
           <input
               id="bear-toggle"
               type="checkbox"
               checked={this.props.hideBear}
               onClick={this.handleBearToggle}
             />
           <label htmlFor="bear-toggle"></label>
         </form>
       </div>
     );
   }
 }

export default Toggle
