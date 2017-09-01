import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	students: [],
}

const ADD = Symbol(`ADD`)
const RM = Symbol(`RM`)

const add = student => ({type: ADD, data: student})
const remove = ({id}) => ({type: RM, data: {id}})

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {

	const action_ = xs.create({
		start(listener) {
			socket.on(`student:join`, (student) => {
				listener.next(add(student))
			})

			socket.on(`student:leave`, (student) => {
				listener.next(remove(student))
			})
		},

		stop() {},
	})

	// STATE

	const reducer_ = action_.map(action => state => {
		// this ensures we don't add the same ID twice
		const students = state.students.filter(({id}) => id !== action.data.id)

		switch (action.type) {
			case ADD:
				return {...state, students: [...students, action.data]}

			case RM:
				return {...state, students}

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