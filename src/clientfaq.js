import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import createState, {connect} from './state'
import Faq from './ui/faq.jsx'

const socket = io(__BACKEND__, {query: {studentId: __STUDENT_ID__}})
const {state_, actions} = createState(socket)
const ConnectedFaq = connect(state_, state => ({...state, actions}))(Faq)

state_.subscribe({
	next: console.log.bind(console, `Current state: `),
	error: console.error.bind(console, `Error in state: `),
	completed: console.log.bind(console, `Final state: `),
})

ReactDOM.render(
	<ConnectedFaq />,
	document.getElementById(`faq`)
)

export {actions}
export const getState = () => {
	state_.subscribe(state => console.log.bind(console)).unsubscribe()
}
