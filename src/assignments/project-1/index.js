import React, { Component } from 'react'
import Uploads from './components/uploads'
import About from './components/about'
import './app.scss'

class App extends Component {
  //set up state (to be toggled click of about/back to album)
 constructor() {
    super();

    this.state = {
      isUploads: true
    }
  }

	render() {

		return (
      <div>
			<Uploads />
      </div>
		);
	}
}

// const App = () => {
//   return <div><Uploads /></div>
// }


export default App
// export default Uploads  //WORKS!
