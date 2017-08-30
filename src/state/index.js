import io from 'socket.io-client'
import xs from 'xstream'
import createStatus from './status'
import create from './support/create'

const INITIAL_STATE = {
	registration: {},
	errors: [],
}

const ERROR = Symbol(`ERROR`)

// createState :: (URL, String) -> { state_ :: Observable, actions :: Object }
const createState = (backend, studentId) => {
	// SOCKET CONNECTION
	const socket = io(backend, {
		query: {studentId},
	})

	const {state_: registration_, actions: {run: register}} = createStatus(socket, `register`)

	const action_ = xs.create({
		start(listener) {
			socket.on(`error`, ([type, data]) => {
				return listener.next({type: ERROR, data: {type, data, timestamp: new Date()}})
			})
		},

		stop() {
			socket.close()
		},
	})

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case ERROR:
				return {...state, errors: [...state.errors, action.data]}

			default: return state
		}
	})

	const state_ = xs.combine(
			create(reducer_, INITIAL_STATE),
			registration_,
		)
		.map(([base, registration]) => ({...base, registration}))
		.remember()

	return {
		state_,
		actions: {
			register,
		},
	}
}

export default createState

export {connect} from './support/create'