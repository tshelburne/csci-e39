import http from 'http'
import debug from 'debug'
import Koa from 'koa'
import cors from 'kcors'
import serve from 'koa-static'
import logger from 'koa-logger'
import socketio from 'socket.io'
import config from './config'
import {Student, Message} from './db'
import {upload, destroy} from './services/upload'
import {IMAGE_MIMES, KB} from './util/constants'

const log = debug(`csci-e39:server`)

const g = {}

/* ------------------------------- ENDPOINTS ------------------------------- */

const app = new Koa()

if (config.env !== `test`) app.use(logger())

app.use(cors(`*`))

app.use(serve(`public`))

/* -------------------------------- SERVER --------------------------------- */

const server = http.createServer(app.callback())

const io = socketio(server)

io.use((socket, next) => (socket.ctx = {}) && next())

io.use(authenticate)

io.on(`connection`, async socket => {
	const {student} = socket.ctx
	if (!student) socket.disconnect()

	if (!g.sockets) g.sockets = new Map()
	g.sockets.set(student.get(`name`), socket)
	socket.on(`disconnect`, () => g.sockets.delete(student.get(`name`)))

	const removeStudent = all => all.filter(({id}) => id !== student.get(`id`))
	const addStudent = all => removeStudent(all).concat(student)

	// ================ CLASS ================

	if (!g.classroom) g.classroom = {students: []}
	g.classroom.students = addStudent(g.classroom.students)

	socket.broadcast.emit(`student:join`, student)
	socket.emit(`student:self`, student)
	io.emit(`student:all`, g.classroom.students)

	socket.on(`disconnect`, () => {
		g.classroom.students = removeStudent(g.classroom.students)

		socket.broadcast.emit(`student:leave`, student)
		socket.broadcast.emit(`student:all`, g.classroom.students)
	})

	// ============= REGISTRATION ============

	socket.on(`register`, handleRegister)

	async function handleRegister() {
		const {student} = socket.ctx
		try {
			if (!!student.get(`confirmed_at`)) return socket.emit(`register:failure`, {message: `Error: This ID has already been used to complete the assignment.`})

			const updatedStudent = await student.save({confirmed_at: new Date()}, {patch: true})
			if (!updatedStudent) return socket.emit(`register:failure`, {message: `Failed to register you - please try again later. (You may not be in our database of registered students yet)`})

			socket.emit(`register:success`, {message: `${student.get(`name`)} completed Module 0!`})
		} catch (e) {
			log(e)
			socket.emit(`register:failure`, {message: `Unexpected failure - please try again`})
		}
	}

	// =============== UPLOADS ===============

	socket.on(`upload:chunk`, handleChunkUpload)

	socket.on(`file:update`, updateFile)
	socket.on(`file:delete`, deleteFile)
	socket.on(`file:share`, shareFile)

	// SEND INITIAL DATA

	const files = await student
		.related(`uploads`)
		.orderBy(`-created_at`)
		.fetch()
	socket.emit(`files:all`, files.toJSON())

	function handleChunkUpload(refId, file, chunk) {
		const {student} = socket.ctx
		try {
			if (file.size > 500 * KB) return socket.emit(`upload:failure`, refId, file, {message: `Max file size 500KB`})
			if (!IMAGE_MIMES.includes(file.type)) return socket.emit(`upload:failure`, refId, file, {message: `File must be an image`})

			const uploaded = upload(refId, file, chunk, finish)
			return socket.emit(`upload:request-chunk`, refId, file, uploaded)
		} catch(e) {
			log(e)
			return socket.emit(`upload:failure`, refId, file, {message: `Unexpected failure - please try again`})
		}

		async function finish(url) {
			try {
				const {name, description} = file
				const uploaded = await student.related(`uploads`).create({url, name, description})
				return socket.emit(`upload:success`, refId, uploaded, url)
			} catch (e) {
				log(e)
				return socket.emit(`upload:failure`, refId, file, {message: `Unexpected failure - please try again`})
			}
		}
	}

	async function updateFile(id, {name, description}) {
		try {
			const file = await student.related(`uploads`).query({where: {id}}).fetchOne()
			if (!file) return socket.emit(`file:update:failure`, {message: `File not found`})
			const updated = await file.save({name, description}, {patch: true})
			socket.emit(`file:update:success`, updated)
		} catch (e) {
			log(e)
			return socket.emit(`file:update:failure`, {message: `Unexpected failure - please try again`})
		}
	}

	async function deleteFile(id) {
		try {
			const file = await student.related(`uploads`).query({where: {id}}).fetchOne()
			if (!file) return socket.emit(`file:delete:failure`, {message: `File not found`})
			await destroy(file.toJSON())
			await file.destroy()
			socket.emit(`file:delete:success`, file)
		} catch (e) {
			log(e)
			return socket.emit(`file:delete:failure`, {message: `Unexpected failure - please try again`})
		}
	}

	async function shareFile(id, name) {
		try {
			const file = await student.related(`uploads`).query({where: {id}}).fetchOne()
			if (!file) return socket.emit(`file:share:failure`, {message: `File not found`})
			if (!g.sockets.has(name)) return socket.emit(`file:share:failure`, {message: `User is not available`})
			g.sockets.get(name).emit(`file:received`, file, student)
			socket.emit(`file:share:success`, file, name)
		} catch (e) {
			log(e)
			return socket.emit(`file:share:failure`, {message: `Unexpected failure - please try again`})
		}
	}

	// ================= CHAT =================

	if (!g.chat) g.chat = {typing: []}

	socket.join(`chat`)

	socket.on(`chat:typing:start`, handleStartTyping)
	socket.on(`chat:typing:stop`, handleStopTyping)
	socket.on(`chat:message`, handleMessage)

	// SEND INITIAL DATA

	const messages = await Message
		.query(qb => qb.limit(30))
		.orderBy(`-created_at`)
		.fetchAll({withRelated: [`student`]})
	socket.emit(`chat:messages`, messages.toJSON())

	function handleStartTyping() {
		g.chat.typing = addStudent(g.chat.typing)
		socket.in(`chat`).broadcast.emit(`chat:typing`, g.chat.typing)
	}

	function handleStopTyping() {
		g.chat.typing = removeStudent(g.chat.typing)
		socket.in(`chat`).broadcast.emit(`chat:typing`, g.chat.typing)
	}

	async function handleMessage({id, text}) {
		try {
			handleStopTyping()

			const newMessage = await student.related(`messages`).create({unique_id: id, text})
			const message = await newMessage.refresh({withRelated: [`student`]})
			socket.emit(`chat:message:success`, {message: `Message sent`})
			io.in(`chat`).emit(`chat:message`, message.toJSON())
		} catch (e) {
			log(e)
			socket.emit(`chat:message:failure`, {message: `Unexpected failure - please try again`})
		}
	}

})

server.listen(config.port, () => log(`✅  - listening at localhost:${config.port}`))

/* -------------------------------- HELPERS -------------------------------- */

async function authenticate(socket, next) {
	const fail = message => next(new AuthError(message))

	try {
		const {studentId} = socket.handshake.query

		if (studentId === `id-not-set`) return fail(`.id file must exist`)

		socket.ctx.student = await Student.where(`unique_id`, studentId).fetch()
		if (!socket.ctx.student) return fail(`Student ID does not exist`)

		socket.emit(`auth.success`)
		return next()
	} catch (e) {
		log(e)
		return fail(`Unexpected failure - please try again`)
	}
}

class SocketError extends Error {
	constructor(type, message) {
		super(message)
		this.data = [type, {message}]
	}
}

class AuthError extends SocketError {
	constructor(message) {
		super(`auth:failure`, message)
	}
}