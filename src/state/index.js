import io from 'socket.io'
import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	message: `Initial message`,
}

const SET = Symbol(`SET`)

const createState = () => {
	const socket = io()

	const test = () => {
		socket.emit(`test`)
	}

	const action_ = xs.create({
		start(listener) {
			socket.on(`test response`, ({message}) => {
				listener.next({type: SET, data: {message}})
			})
		},

		stop() {
			socket.close()
		},
	})

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
			test,
		},
	}
}

export default createState

export {connect} from './support/create'