import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import Module from '../assignments/project-1/index.jsx'
=======
import Module from '../assignments/project-2/index.jsx'
>>>>>>> master

const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return <Module {...props} />
	}
}

export default App
