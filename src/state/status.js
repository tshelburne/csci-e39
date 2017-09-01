import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	status: `init`,
	message: ``,
}

const SET = Symbol(`SET`)

const set = data => ({type: SET, data})
const start = () => set({status: `pending`, message: ``})
const succeed = message => set({status: `success`, message})
const fail = message => set({status: `failure`, message})

// createState :: (Socket, String) -> { state_ :: Observable, actions :: Object }
const createState = (socket, type) => {

	const action_ = xs.create({
		start(listener) {
			socket.on(`${type}:success`, ({message}) => {
				listener.next(succeed(message))
			})

			socket.on(`${type}:failure`, ({message}) => {
				listener.next(fail(message))
			})
		},

		stop() {
			socket.close()
		},
	})

	// ACTIONS

	const run = () => {
		action_.shamefullySendNext(start())
		socket.emit(type, ...arguments)
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
			run,
		},
	}
}

export default createState