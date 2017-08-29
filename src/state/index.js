import io from 'socket.io-client'
import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	registration: {
		status: `init`,
		message: ``,
	},
}

const SET = Symbol(`SET`)

const set = data => ({type: SET, data})
const succeed = message => set({registration: {status: `success`, message}})
const fail = message => set({registration: {status: `failure`, message}})
const send = () => set({registration: {status: `sending`, message: ``}})

// createState :: (URL, String) -> { state_ :: Observable, actions :: Object }
const createState = (backend, studentId) => {
	// SOCKET CONNECTION
	const socket = io(backend, {
		query: {studentId},
	})

	const action_ = xs.create({
		start(listener) {
			socket.on(`error`, ([type, data]) => {
				switch (type) {
					case `auth.failure`:
					default:
						listener.next(fail(data.message))
				}
			})

			socket.on(`register.success`, ({message}) => {
				listener.next(succeed(message))
			})

			socket.on(`register.failure`, ({message}) => {
				listener.next(fail(message))
			})
		},

		stop() {
			socket.close()
		},
	})

	// ACTIONS

	const register = () => {
		action_.shamefullySendNext(send())
		socket.emit(`register`)
	}

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case SET:
				return {...state, ...action.data}

			default: return state
		}
	})

	const state_ = create(reducer_, INITIAL_STATE)

	return {
		state_,
		actions: {
			register,
		},
	}
}

export default createState

export {connect} from './support/create'