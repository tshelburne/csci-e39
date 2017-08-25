import xs from 'xstream'
import create from './support/create'

const INITIAL_STATE = {
	message: `Initial message`,
}

const SET = Symbol(`SET`)

const createState = () => {
	const action_ = xs.create()

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
		actions: {},
	}
}

export default createState

export {connect} from './support/create'