import React from 'react'
import xs from 'xstream'
import {run} from '@cycle/run'
import makeReactDriver from '@sunny-g/cycle-react-driver'
import makeLogDriver from 'cycle-log-driver'
import makeSocketDriver, {emit} from './lib/cyclejs/socket-driver'
import {scan, split} from './lib/xstream'

import App from './ui/app'

function main({socket, ...sources}) {
	const [registration_, register_] = createStatus(`register`)

	// USER ACTIONS

	const actions = {
		register: sources.react.handler(`register`),
		chat: {
			startTyping: sources.react.handler(`startTyping`),
			stopTyping: sources.react.handler(`stopTyping`),
			send: sources.react.handler(`send`),
		},
	}

	const emit_ = xs.merge(register_)

	// APP STATE

	const connected_ = xs
		.merge(socket.on(`connect`).mapTo(true), socket.on(`disconnect`).mapTo(false))
		.startWith(false)

	const [authFailure_, nonAuthFailure_] = socket.on(`error`).compose(split(([type]) => type === `auth:failure`))

	const errors_ = nonAuthFailure_
		.map(([type, data]) => ({type, data, timestamp: new Date()}))
		.compose(scan((list, e) => [...list, e], []))
		.startWith([])

	const auth_ = xs.merge(
			socket.on(`auth:success`).mapTo({status: `success`, message: ``}),
			authFailure_.map(([, {message}]) => ({status: `failure`, message}))
		)
		.startWith({status: `init`, message: ``})

	const classroom_ = xs
		.combine(socket.on(`student:self`), socket.on(`student:all`))
		.map(([self, students]) => ({self, students}))
		.startWith({self: null, students: []})

	const chat_ = xs.empty()
		.startWith({typing: [], messages: [], send: null})

	const upload_ = xs.empty()
		.startWith({files: {}, update: null, delete: null, share: null})

	const props_ = xs
		.combine(connected_, auth_, classroom_, registration_, errors_)
		.map(([connected, auth, classroom, registration, errors]) =>
			({connected, auth, classroom, registration, errors})
		)

	// SINKS

	return {
		react: props_.map(props => <App actions={actions} {...props} />),
		socket: xs.merge(emit_),
		log: xs.merge(
			socket.on(`register:failure`).map(v => ({name: `debug`, message: v})),
			props_.map(props => ({name: `state`, message: props, color: `#4286f4`})),
		)
	}

	function createStatus(name) {
		const state_ = xs.merge(
				sources.react.event(name).mapTo({status: `pending`, message: ``}),
				socket.on(`${name}:success`).map(([{message}]) => ({status: `success`, message})),
				socket.on(`${name}:failure`).map(([{message}]) => ({status: `failure`, message})),
			)
			.startWith({status: `init`, message: ``})

		const emit_ = sources.react.event(name).map((...args) => emit(name, ...args))

		return [state_, emit_]
	}
}

run(main, {
	react: makeReactDriver(document.getElementById(`app`)),
	socket: makeSocketDriver(__BACKEND__, {query: {studentId: __STUDENT_ID__}}),
	log: makeLogDriver({include: [`debug`, `state`]})
})
