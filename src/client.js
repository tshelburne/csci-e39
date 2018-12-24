import React from 'react'
import xs from 'xstream'
import {run} from '@cycle/run'
import makeReactDriver from '@sunny-g/cycle-react-driver'
import makeLogDriver from 'cycle-log-driver'
import makeSocketDriver, {emit} from './lib/cyclejs/socket-driver'
import {scan, split} from './lib/xstream'

import App from './ui/app'

function main({socket, ...sources}) {
	// USER ACTIONS

	const actions = {
		register: sources.react.handler(`register`),
		chat: {
			startTyping: sources.react.handler(`startTyping`),
			stopTyping: sources.react.handler(`stopTyping`),
			send: sources.react.handler(`send`),
		},
	}

	const emit_ = xs.merge(
			sources.react.event(`register`).mapTo(emit(`register`)),
		)

	// APP STATE

	const connected_ = xs
		.merge(socket.on(`connect`).mapTo(true), socket.on(`disconnect`).mapTo(false))
		.startWith(false)

	const [authFailure_, nonAuthFailure_] = socket.on(`error`).compose(split(([type]) => type === `auth:failure`))

	const error_ = nonAuthFailure_
		.map(([type, data]) => ({type, data, timestamp: new Date()}))
		.compose(scan((list, e) => [...list, e], []))

	const auth_ = xs.merge(
			socket.on(`auth:success`).mapTo({status: `success`, message: ``}),
			authFailure_.map(([, {message}]) => ({status: `failure`, message}))
		)
		.startWith({status: `init`, message: ``})

	const classroom_ = xs
		.combine(socket.on(`student:self`), socket.on(`student:all`))
		.map(([self, students]) => ({self, students}))
		.startWith({self: null, students: []})

	const registration_ = xs
		.merge(
			sources.react.event(`register`).mapTo({status: `pending`, message: ``}),
			socket.on(`register:success`).map(([{message}]) => ({status: `success`, message})),
			socket.on(`register:failure`).map(([{message}]) => ({status: `failure`, message})),
		)
		.startWith({status: `init`, message: ``})

	const chat_ = xs.of(null)

	const upload_ = xs.of(null)

	const props_ = xs
		.combine(connected_, auth_, registration_)
		.map(([connected, auth, registration]) =>
			({connected, auth, registration})
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
}

run(main, {
	react: makeReactDriver(document.getElementById(`app`)),
	socket: makeSocketDriver(__BACKEND__, {query: {studentId: __STUDENT_ID__}}),
	log: makeLogDriver({include: [`debug`, `state`]})
})
