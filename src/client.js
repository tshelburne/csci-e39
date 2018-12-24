import React from 'react'
import xs from 'xstream'
import pairwise from 'xstream/extra/pairwise'
import {run} from '@cycle/run'
import makeReactDriver from '@sunny-g/cycle-react-driver'
import makeLogDriver from 'cycle-log-driver'
import makeSocketDriver, {emit} from './lib/cyclejs/socket-driver'
import {scan, split} from './lib/xstream'
import {uuid} from './util/functions'

import App from './ui/app'

function main({socket, ...sources}) {
	const [registration_, emitRegister_] = createStatus(`register`)
	const [sendStatus_, emitSend_] = createStatus(`chat:message`, (text) => ({id: uuid(), text}))

	// USER ACTIONS

	const actions = {
		register: sources.react.handler(`register`),
		chat: {
			startTyping: sources.react.handler(`chat:typing:start`),
			stopTyping: sources.react.handler(`chat:typing:stop`),
			send: sources.react.handler(`chat:message`),
		},
	}

	const emit_ = xs.merge(
		emitRegister_,
		emitSend_,
		sources.react.event(`chat:typing:start`).mapTo(emit(`chat:typing:start`)),
		sources.react.event(`chat:typing:stop`).mapTo(emit(`chat:typing:stop`)),
	)

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
		.combine(socket.simple(`student:self`), socket.simple(`student:all`))
		.map(([self, students]) => ({self, students}))
		.startWith({self: null, students: []})

	const messages_ = xs
		.merge(socket.simple(`chat:messages`), socket.simple(`chat:message`))
		.compose(scan((messages, next) => {
			return Array.isArray(next) ? next.map(dateify) : [...messages, dateify(next)]
		}, []))
		.map(messages => messages.sort(byTimestamp))

	const chat_ = xs
		.combine(sendStatus_, messages_, socket.simple(`chat:typing`).startWith([]))
		.map(([send, messages, typing]) => ({typing, messages, send}))
		.startWith({typing: [], messages: [], send: null})

	const upload_ = xs.empty()
		.startWith({files: {}, update: null, delete: null, share: null})

	const props_ = xs
		.combine(connected_, auth_, classroom_, registration_, chat_, errors_)
		.map(([connected, auth, classroom, registration, chat, errors]) =>
			({connected, auth, classroom, registration, chat, errors})
		)

	// SINKS

	return {
		react: props_.map(props => <App actions={actions} {...props} />),
		socket: xs.merge(emit_),
		log: xs.merge(
			messages_.map(v => ({name: `debug`, message: v})),
			props_.map(props => ({name: `state`, message: props, color: `#4286f4`})),
		)
	}

	function createStatus(name, fn = _ => _) {
		const state_ = xs.merge(
				sources.react.event(name).mapTo({status: `pending`, message: ``}),
				socket.simple(`${name}:success`).map(({message}) => ({status: `success`, message})),
				socket.simple(`${name}:failure`).map(({message}) => ({status: `failure`, message})),
			)
			.startWith({status: `init`, message: ``})

		const emit_ = sources.react.event(name).map((...args) => emit(name, fn(...args)))

		return [state_, emit_]
	}
}

run(main, {
	react: makeReactDriver(document.getElementById(`app`)),
	socket: makeSocketDriver(__BACKEND__, {query: {studentId: __STUDENT_ID__}}),
	log: makeLogDriver({include: [`debug`, `state`]})
})

// HELPERS

function dateify({createdAt, updatedAt, ...data}) {
	return {
		...data,
		createdAt: new Date(createdAt),
		updatedAt: new Date(updatedAt),
	}
}

function byTimestamp(a, b) {
	return a.createdAt - b.createdAt
}