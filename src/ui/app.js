import React from 'react'
import PropTypes from 'prop-types'

import Module from '../assignments/project-2'
<<<<<<< HEAD
 
=======

>>>>>>> 27ef070742bc7a15ae90177c3b6fdab5bd6aa0b0
const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>
		default: return <Module {...props} />
	}
}

export default App
