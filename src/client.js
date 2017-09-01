import React from 'react'
import ReactDOM from 'react-dom'
import {Manager} from 'socket.io-client'
import createState, {connect} from './state'
import App from './ui/app.jsx'

const manager = new Manager(__BACKEND__, {query: {studentId: __STUDENT_ID__}})
const {state_, actions} = createState(manager)
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