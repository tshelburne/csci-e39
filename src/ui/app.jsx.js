import React from 'react'

const App = props => {
	return <div>
		<h1>Latest Message</h1>
		<span>{props.message}</span>
	</div>
}

export default App