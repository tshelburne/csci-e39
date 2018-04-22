import React from 'react'
import PropTypes from 'prop-types'
import Module from '../assignments/project-2/index.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  indigo800, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  fontFamily: 'Do Hyeon, sans-serif',
  palette: {
    primary1Color: indigo800,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
}
});


const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return  <MuiThemeProvider muiTheme={muiTheme}>
		    <Module {...props} />
		  </MuiThemeProvider>
	}
}

export default App
