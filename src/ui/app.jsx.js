import React from 'react'
import PropTypes from 'prop-types'
import Module from '../assignments/project-1/index.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  pink400, cyan700,
  red100,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import CircularProgress from 'material-ui/CircularProgress';

const muiTheme = getMuiTheme({
  fontFamily: 'Do Hyeon, sans-serif',
  palette: {
    primary1Color: pink400,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: red100,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
  }
});


const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <MuiThemeProvider muiTheme={muiTheme}>
         <div style={{width: "100%", textAlign: "center", marginTop: "25%"}}>
            <CircularProgress size={80} thickness={5} />
        </div>
      </MuiThemeProvider>
		case `failure`: return <span>{auth.message}</span>

		default: return  <MuiThemeProvider muiTheme={muiTheme}>
		    <Module {...props} />
		  </MuiThemeProvider>
	}
}

export default App
