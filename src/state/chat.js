import xs from 'xstream'
import {toObjBase} from '../lib/xstream'
import createStatus from './status'
import create from './support/create'
import {uuid} from '../util/functions'

const INITIAL_STATE = {
	typing: [],
	messages: [],
	send: null,
}

const TYPING = Symbol(`TYPING`)
const MESSAGE = Symbol(`MESSAGE`)
const MESSAGES = Symbol(`MESSAGES`)

const updateTyping = list => ({type: TYPING, data: list})
const addMessage = message => ({type: MESSAGE, data: message})
const setMessages = messages => ({type: MESSAGES, data: messages})

// createState :: Socket -> { state_ :: Observable, actions :: Object }
const createState = (socket) => {
	const {state_: send_, actions: {run: sendMessage}} = createStatus(socket, `chat:message`)

	const action_ = xs.create({
		start(listener) {
			socket.on(`chat:messages`, (messages) => {
				listener.next(setMessages(messages))
			})

			socket.on(`chat:message`, (message) => {
				listener.next(addMessage(message))
			})

			socket.on(`chat:typing`, (list) => {
				listener.next(updateTyping(list))
			})
		},

		stop() {},
	})

	// ACTIONS

	function startTyping() {
		socket.emit(`chat:typing:start`)
	}

	function stopTyping() {
		socket.emit(`chat:typing:stop`)
	}

	function send(text) {
		return sendMessage({id: uuid(), text})
	}

	// STATE

	const reducer_ = action_.map(action => state => {
		switch (action.type) {
			case TYPING:
				return {...state, typing: action.data}

			case MESSAGE:
				return {...state, messages: [...state.messages, action.data].sort(byTimestamp)}

			case MESSAGES:
				return {...state, messages: action.data.sort(byTimestamp)}

			default: return state
		}
	})

	const state_ = xs
		.combine(create(reducer_, INITIAL_STATE), send_)
		.compose(toObjBase(`send`))

	return {
		state_,
		actions: {
			startTyping,
			stopTyping,
			send,
		},
	}
}

export default createState

function byTimestamp(a, b) {
	return a.timestamp - b.timestamp
}