import React from 'react'
import Dashboard from './components/dashboard.jsx'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: {
    	main: '#28ace2'
    },
    secondary: {
    	main: '#c8e6fa'
    },
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const Gallery = ({...props}) => {

	return <MuiThemeProvider>
			<div>
				<AppBar position="static">
					<Toolbar>
			          <Typography variant="title" color="inherit">
			            Sean's Photos
			          </Typography>
			        </Toolbar> 
				</AppBar>
				<Dashboard {...props} />
			</div>
		</MuiThemeProvider>
}


export default Gallery
