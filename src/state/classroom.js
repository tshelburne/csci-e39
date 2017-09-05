import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	students: [],
}

const SET = Symbol(`SET`)

const set = students => ({type: SET, data: students})

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {

	const action_ = xs.create({
		start(listener) {
			socket.on(`student:all`, (students) => {
				listener.next(set(students))
			})
		},

		stop() {},
	})

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case SET:
				return {...state, students: action.data}

			default: return state
		}
	})

	const state_ = create(reducer_, INITIAL_STATE)

	return {
		state_,
		actions: {},
	}
}

export default createState