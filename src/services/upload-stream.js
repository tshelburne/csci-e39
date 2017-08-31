import cloudinary from 'cloudinary'
import fs from 'fs'
import config from '../config'
import {noop} from '../util/functions'

const g = {
	streams: {},
}

function uploadStream(file, fn=noop) {
	if (!g.streams[file.id]) {
		switch (config.env) {
			case `production`:
				g.streams[file.id] = cloudinary.uploader.upload_stream(
					({url}) => {
						delete g.streams[file.id]
						return fn(url)
					},
					{public_id: file.id}
				)
				break

			default:
				const path = `${__dirname}/../../tmp/uploads/${file.name}`
				g.streams[file.id] = fs.createWriteStream(path).on(`close`, () => fn(path))
		}
	}

	return g.streams[file.id]
}

export default uploadStream
