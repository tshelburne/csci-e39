import xs from 'xstream'
import create from './support/create'
import {KB} from '../util/constants'
import {uuid, isImage} from '../util/functions'

const INITIAL_STATE = {}

const CHUNK_SIZE = 10 * KB

const UPDATE = Symbol(`UPDATE`)
const FAIL = Symbol(`FAIL`)

const update = (file, uploaded) => ({type: UPDATE, data: {file, uploaded}})
const start = file => update(file, 0)
const finish = file => update(file, file.size)
const fail = (file, error) => ({type: FAIL, data: {file, error}})

function createState(socket) {

	const action_ = xs.create({
		start(listener) {
			socket.on(`upload:success`, (file, url) => {
				listener.next(finish({...file, url}))
			})

			socket.on(`upload:failure`, (file, {message}) => {
				listener.next(fail(file, message))
			})
		},

		stop() {},
	})

	function upload(inputFile, {name, description} = {}) {
		const file = {
			id: uuid(),
			url: ``,
			name: name || inputFile.name,
			description: description || ``,
			type: inputFile.type,
			size: inputFile.size,
		}

		action_.shamefullySendNext(start(file))

		const reader = new FileReader()
		reader.onload = () => socket.emit(`upload:chunk`, file, reader.result)

		socket.on(`upload:request-chunk`, uploadNextChunk)

		uploadNextChunk(file)

		function uploadNextChunk({id}, start = 0) {
			if (id !== file.id || start == null) return

			action_.shamefullySendNext(update(file, start))

			const end = Math.min(start + CHUNK_SIZE, file.size)
			const slice = inputFile.slice(start, end)
			reader.readAsArrayBuffer(slice)
		}
	}

	const reducer_ = action_.map(action => state => {
		const {file, uploaded, error} = action.data
		switch (action.type) {
			case UPDATE:
				const progress = uploaded * 100 / file.size
				return {...state, [file.id]: {...file, progress}}

			case FAIL:
				return {...state, [file.id]: {...file, progress: 100, error}}

			default: return state
		}
	})

	const state_ = create(reducer_, INITIAL_STATE)

	return {
		state_,
		actions: {
			upload,
		},
	}
}

export default createState