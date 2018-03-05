import xs from 'xstream'
import {toObjBase} from '../lib/xstream'
import create from './support/create'
import createStatus from './status'
import {KB} from '../util/constants'
import {uuid, isImage} from '../util/functions'

const INITIAL_STATE = {
	files: {}, // this is mapped to an array before output
	update: null,
	delete: null,
	share: null,
}

const CHUNK_SIZE = 10 * KB

const MERGE_FILES = Symbol(`MERGE_FILES`)
const RECEIVED = Symbol(`RECEIVED`)
const UPDATE = Symbol(`UPDATE`)
const REMOVE = Symbol(`REMOVE`)
const PROGRESS = Symbol(`PROGRESS`)
const FAIL = Symbol(`FAIL`)

const mergeFiles = files => ({type: MERGE_FILES, data: {files}})
const update = file => ({type: UPDATE, data: {file}})
const remove = file => ({type: REMOVE, data: {file}})
const received = (file, sharer) => ({type: RECEIVED, data: {file, sharer}})

const progress = (file, uploaded) => ({type: PROGRESS, data: {file, uploaded}})
const start = file => progress(file, 0)
const finish = file => progress(file, file.size)
const fail = (file, error) => ({type: FAIL, data: {file, error}})

function createState(socket) {
	const {state_: update_, actions: {run: handleUpdateFile}} = createStatus(socket, `file:update`)
	const {state_: delete_, actions: {run: handleDeleteFile}} = createStatus(socket, `file:delete`)
	const {state_: share_, actions: {run: handleShareFile}} = createStatus(socket, `file:share`)

	const action_ = xs.create({
		start(listener) {
			socket.on(`files:all`, files => {
				listener.next(mergeFiles(files))
			})

			socket.on(`upload:success`, (file, url) => {
				listener.next(finish({...file, url}))
			})

			socket.on(`upload:failure`, (file, {message}) => {
				listener.next(fail(file, message))
			})

			socket.on(`file:update:success`, file => {
				listener.next(update(file))
			})

			socket.on(`file:delete:success`, file => {
				listener.next(remove(file))
			})

			socket.on(`file:received`, (file, sharer) => {
				listener.next(received(file, sharer))
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

	function updateFile(file, {name, description}) {
		return handleUpdateFile(file.id, {name, description})
	}

	function deleteFile(file) {
		return handleDeleteFile(file.id)
	}

	function shareFile(file, name) {
		return handleShareFile(file.id, name)
	}

	const reducer_ = action_.map(action => state => {
		const {file} = action.data
		switch (action.type) {
			case MERGE_FILES:
				const allFiles = action.data.files.reduce(
					(allFiles, file) => ({...allFiles, [file.id]: {...file, progress: 100}}),
					{}
				)
				return {...state, files: {...state.files, ...allFiles}}

			case RECEIVED:
				return setInFiles(file.id, {...file, sharer: action.data.sharer})

			case UPDATE:
				return setInFiles(file.id, {...file, progress: 100})

			case REMOVE:
				const {[file.id]: _, ...files} = state.files
				return {...state, files}

			case PROGRESS:
				const progress = action.data.uploaded * 100 / file.size
				return setInFiles(file.id, {...file, progress})

			case FAIL:
				return setInFiles(file.id, {...file, progress: 100, error: action.data.error})

			default: return state
		}

		function setInFiles(id, data) {
			return {...state, files: {...state.files, [id]: data}}
		}
	})

	const state_ = xs
		.combine(create(reducer_, INITIAL_STATE), update_, delete_, share_)
		.compose(toObjBase(`update`, `delete`, `share`))
		.map(({files, ...rest}) => ({files: Object.values(files), ...rest}))

	return {
		state_,
		actions: {
			upload,
			updateFile,
			deleteFile,
			shareFile,
		},
	}
}

export default createState