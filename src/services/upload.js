import cloudinary from 'cloudinary'
import fs from 'fs'
import config from '../config'
import {noop} from '../util/functions'

const g = {
	uploads: {},
}

const UPLOAD_DIR = `uploads`
const ABS_UPLOAD_DIR = `${__dirname}/../../public/${UPLOAD_DIR}`

if (config.env !== `production` && !fs.existsSync(ABS_UPLOAD_DIR)) {
	fs.mkdirSync(ABS_UPLOAD_DIR)
}

// upload :: (File, Buffer, URL -> a) -> Maybe Integer
function upload(file, chunk, fn=noop) {
	const {id, size} = file

	if (!g.uploads[id]) g.uploads[id] = {uploaded: 0, stream: stream(file, finish)}

	const upload = g.uploads[id]

	upload.stream.write(chunk)

	upload.uploaded += chunk.length
	if (upload.uploaded >= size) {
		upload.stream.end()
		return null
	}

	return upload.uploaded

	function finish(url) {
		delete g.uploads[id]
		return fn(url)
	}
}

export default upload

/* -------------------------------- HELPERS -------------------------------- */

function stream(file, cb) {
	switch (config.env) {
		case `production`:
			return cloudinary.uploader.upload_stream(({url}) => cb(url), {public_id: file.id})

		default:
			return fs
				.createWriteStream(`${ABS_UPLOAD_DIR}/${file.name}`)
				.on(`close`, () => cb(`http://localhost:3000/${UPLOAD_DIR}/${file.name}`))
	}
}