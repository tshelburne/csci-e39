import xs from 'xstream'
import {toObjBase} from '../lib/xstream'
import createStatus from './status'
import createClassroom from './classroom'
import createChat from './chat'
import createUploads from './uploads'
import create from './support/create'

const INITIAL_STATE = {
	auth: {status: `init`, message: ``},
	classroom: null,
	registration: null,
	chat: null,
	uploads: null,
	errors: [],
}

const AUTH = Symbol(`AUTH`)
const ERROR = Symbol(`ERROR`)

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {
	const {state_: classroom_} = createClassroom(socket)
	const {state_: registration_, actions: registration} = createStatus(socket, `register`)
	const {state_: uploads_, actions: {upload}} = createUploads(socket)
	const {state_: chat_, actions: chat} = createChat(socket)

	const action_ = xs.create({
		start(listener) {
			socket.on(`auth.success`, () => {
				listener.next({type: AUTH, data: {status: `success`, message: ``}})
			})

			socket.on(`error`, ([type, data]) => {
				switch (type) {
					case `auth:failure`:
						return listener.next({type: AUTH, data: {status: `failure`, message: data.message}})

					default:
						return listener.next({type: ERROR, data: {type, data, timestamp: new Date()}})
				}
			})
		},

		stop() {
			socket.close()
		},
	})

	// ACTIONS

	// this protects the run fn from receiving synthetic react events, which won't
	// stringify down because of cyclic data when socket.io serializes
	function register() {
		registration.run()
	}

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case AUTH:
				return {...state, auth: action.data}

			case ERROR:
				return {...state, errors: [...state.errors, action.data]}

			default: return state
		}
	})

	const state_ = xs.combine(
			create(reducer_, INITIAL_STATE),
			classroom_,
			registration_,
			chat_,
			uploads_,
		)
		.compose(toObjBase(`classroom`, `registration`, `chat`, `uploads`))
		.remember()

	return {
		state_,
		actions: {
			register,
			chat,
			upload,
		},
	}
}

export default createState

export {connect} from './support/create'