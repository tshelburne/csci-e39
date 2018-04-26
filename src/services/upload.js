import cloudinary from 'cloudinary'
import fs from 'fs'
import config from '../config'
import {noop, uuid} from '../util/functions'

const g = {
	uploads: {},
}

const UPLOAD_DIR = `uploads`
const ABS_UPLOAD_DIR = `${__dirname}/../../public/${UPLOAD_DIR}`

if (config.env !== `production` && !fs.existsSync(ABS_UPLOAD_DIR)) {
	fs.mkdirSync(ABS_UPLOAD_DIR)
}

// upload :: (String, File, Buffer, URL -> a) -> Maybe Integer
export function upload(referenceId, file, chunk, fn=noop) {
	const {size} = file

	if (!g.uploads[referenceId]) g.uploads[referenceId] = {uploaded: 0, stream: stream(file, finish)}

	const upload = g.uploads[referenceId]

	upload.stream.write(chunk)

	upload.uploaded += chunk.length
	if (upload.uploaded >= size) {
		upload.stream.end()
		return null
	}

	return upload.uploaded

	function finish(url) {
		delete g.uploads[referenceId]
		return fn(url)
	}
}

// destroy :: File -> Promise ()
export function destroy(file) {
	return new Promise((resolve, reject) => {
		const finish = err => err ? reject(err) : resolve()

		const id = file.url.match(/([^\/]*)\.\w+$/)[1]
		switch (config.env) {
			case `production`:
				return cloudinary.uploader.destroy(id, finish)

			default:
				return fs.unlink(`${ABS_UPLOAD_DIR}/${idifiedName(file, id)}`, finish)
		}
	})
}

/* -------------------------------- HELPERS -------------------------------- */

function stream(file, cb) {
	const filename = idifiedName(file, uuid())
	switch (config.env) {
		case `production`:
			return cloudinary.uploader.upload_stream(({url}) => cb(url), {public_id: filename})

		default:
			return fs
				.createWriteStream(`${ABS_UPLOAD_DIR}/${filename}`)
				.on(`close`, () => cb(`http://localhost:3000/${UPLOAD_DIR}/${filename}`))
	}
}

function idifiedName(file, id) {
	return file.url.replace(/.*(\.\w+)$/, `${id}$1`)
}