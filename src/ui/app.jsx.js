import React from 'react'
import PropTypes from 'prop-types'
import Module from '../assignments/project-2/index.jsx'

const App = ({auth, ...props}) => {
	switch (auth.status) {
		case `init`: return <span>Authorizing</span>
		case `failure`: return <span>{auth.message}</span>

		default: return <Module {...props} />
	}
}

export default App
