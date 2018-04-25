import React from 'react'
import {scan} from '../../lib/xstream'

const createState = (reducer_, initialState) => {
	return reducer_
		.startWith(_ => _)
		.compose(scan((state, reducer) => reducer(state), initialState))
		.remember()
}

export default createState

export const connect = (state_, selector=state => state) => Component => {
	return class Connected extends React.Component {

		componentWillMount() {
			this.unsubscribe = state_.map(selector).subscribe({
				next: state => this.setState(state),
			})
		}

		componentWillUnmount() {
			this.unsubscribe()
		}

		render() {
			return <Component {...this.state} {...this.props} />
		}

	}
}
