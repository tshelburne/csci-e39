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

const progress = (refId, file, uploaded) => ({type: PROGRESS, data: {refId, file, uploaded}})
const start = (refId, file) => progress(refId, file, 0)
const finish = (refId, file) => progress(refId, file, file.size)
const fail = (refId, file, error) => ({type: FAIL, data: {refId, file, error}})

function createState(socket) {
	const {state_: update_, actions: {run: handleUpdateFile}} = createStatus(socket, `file:update`)
	const {state_: delete_, actions: {run: handleDeleteFile}} = createStatus(socket, `file:delete`)
	const {state_: share_, actions: {run: handleShareFile}} = createStatus(socket, `file:share`)

	const action_ = xs.create({
		start(listener) {
			socket.on(`files:all`, files => {
				listener.next(mergeFiles(files))
			})

			socket.on(`upload:success`, (uploadRef, file, url) => {
				listener.next(finish(uploadRef, {...file, url}))
			})

			socket.on(`upload:failure`, (uploadRef, file, {message}) => {
				listener.next(fail(uploadRef, file, message))
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

	function upload(inputFile, name, description) {
		const refId = uuid()
		const file = {
			url: ``,
			name: name || inputFile.name,
			description: description || ``,
			type: inputFile.type,
			size: inputFile.size,
		}
		console.log("upload---------------");
		console.log(file);
		action_.shamefullySendNext(start(refId, file))

		const reader = new FileReader()
		reader.onload = () => socket.emit(`upload:chunk`, refId, file, reader.result)

		socket.on(`upload:request-chunk`, uploadNextChunk)

		uploadNextChunk(refId, file)

		function uploadNextChunk(uploadRef, uploaded, start = 0) {
			if (uploadRef !== refId || start == null) return

			action_.shamefullySendNext(progress(uploadRef, uploaded, start))

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
		switch (action.type) {
			case MERGE_FILES:
				const allFiles = action.data.files.reduce(
					(allFiles, file) => ({...allFiles, [file.id]: file}),
					{}
				)
				return {...state, files: {...state.files, ...allFiles}}

			case RECEIVED: {
				const {file} = action.data
				return setInFiles(file.id, {...file, sharer: action.data.sharer}, state)
			}

			case UPDATE: {
				const {file} = action.data
				return setInFiles(file.id, file, state)
			}

			case REMOVE: {
				const {file} = action.data
				return removeFromFiles(file.id, state)
			}

			case PROGRESS: {
				const {refId, file} = action.data
				const progress = action.data.uploaded * 100 / file.size
				return progress >= 100
					? setInFiles(file.id, file, removeFromFiles(refId, state))
					: setInFiles(refId, {...file, progress}, state)
			}

			case FAIL: {
				const {refId, file} = action.data
				return setInFiles(refId, {...file, error: action.data.error}, state)
			}

			default: return state
		}

		function setInFiles(id, data, state) {
			return {...state, files: {...state.files, [id]: data}}
		}

		function removeFromFiles(id, state) {
			const {[id]: _, ...files} = state.files
			return {...state, files}
		}
	})

	const state_ = xs
		.combine(create(reducer_, INITIAL_STATE), update_, delete_, share_)
		.compose(toObjBase(`update`, `delete`, `share`))
		.map(({files, ...rest}) => ({
			...rest,
			files: Object.entries(files).map(([id, value]) => ({...value, id})),
		}))

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