import React from 'react'
import ReactDOM from 'react-dom'
import createState, {connect} from './state'
import App from './ui/app.jsx'

const {state_, actions} = createState(__STUDENT_ID__)
const ConnectedApp = connect(state_, state => ({...state, actions}))(App)

state_.subscribe({
	next: console.log.bind(console, `Current state: `),
	error: console.error.bind(console, `Error in state: `),
	completed: console.log.bind(console, `Final state: `),
})

ReactDOM.render(
	<ConnectedApp />,
	document.getElementById(`app`)
)

export {actions}
export const getState = () => {
	state_.subscribe(state => console.log.bind(console)).unsubscribe()
}