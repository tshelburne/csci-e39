import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	self: null,
	students: [],
}

const STUDENTS = Symbol(`STUDENTS`)
const SELF = Symbol(`SELF`)

const allStudents = students => ({type: STUDENTS, data: students})
const self = student => ({type: SELF, data: student})

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {

	const action_ = xs.create({
		start(listener) {
			socket.on(`student:self`, student => {
				listener.next(self(student))
			})

			socket.on(`student:all`, (students) => {
				listener.next(allStudents(students))
			})
		},

		stop() {},
	})

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case STUDENTS:
				return {...state, students: action.data}

			case SELF:
				return {...state, self: action.data}

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