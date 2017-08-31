import cloudinary from 'cloudinary'
import {noop} from '../util/functions'

const g = {
	streams: {},
}

function uploadStream(file, fn=noop) {
	if (!g.streams[file.id]) {
		g.streams[file.id] = cloudinary.uploader.upload_stream(
			({url}) => {
				delete g.streams[file.id]
				return fn(url)
			},
			{public_id: file.id}
		)
	}

	return g.streams[file.id]
}

export default uploadStream
