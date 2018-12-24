import xs from 'xstream'
import io from 'socket.io-client'
import {first} from '../xstream'

function makeSocketDriver(...cfg) {
	const socket = io(...cfg)

	return function socketDriver(emit_) {
		emit_.addListener({
			next: ({name, args}) => {
				socket.emit(name, ...args)
			},
		})

		return {
			on,
			simple: name => on(name).compose(first),
		}

		function on(name) {
			return xs.create({
				start(listener) {
					socket.on(name, (...args) => {
						listener.next(args)
					})
				},
				stop() {},
			})
		}
	}
}

export default makeSocketDriver

export function emit(name, ...args) {
	return {name, args}
}
