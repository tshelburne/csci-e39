import xs from 'xstream'
import io from 'socket.io-client'

function makeSocketDriver(...cfg) {
	const socket = io(...cfg)

	return function socketDriver(emit_) {
		emit_.addListener({
			next: ({name, args}) => {
				socket.emit(name, ...args)
			},
		})

		return {
			on: name =>
				xs.create({
					start(listener) {
						socket.on(name, (...args) => {
							listener.next(args)
						})
					},
					stop() {},
				}),
		}
	}
}

export default makeSocketDriver

export function emit(name, ...args) {
	return {name, args}
}
