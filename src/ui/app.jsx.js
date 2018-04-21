import React from 'react'
import PropTypes from 'prop-types'
import Module from '../assignments/project-2/index.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return  <MuiThemeProvider>
		    <Module {...props} />
		  </MuiThemeProvider>
	}
}

export default App
