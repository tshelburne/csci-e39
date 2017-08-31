import xs from 'xstream'
import createStatus from './status'
import createUploader from './file-uploader'
import create from './support/create'

const INITIAL_STATE = {
	registration: {},
	uploads: {},
	errors: [],
}

const ERROR = Symbol(`ERROR`)

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {
	const {state_: registration_, actions: {run: register}} = createStatus(socket, `register`)
	const {state_: uploads_, actions: {upload}} = createUploader(socket)

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
			uploads_,
		)
		.map(([base, registration, uploads]) => ({...base, registration, uploads}))
		.remember()

	return {
		state_,
		actions: {
			register,
			upload,
		},
	}
}

export default createState

export {connect} from './support/create'