import http from 'http'
import Koa from 'koa'
import logger from 'koa-logger'
import route from 'koa-route'
import serve from 'koa-static'
import views from 'koa-views'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import socketio from 'socket.io'
import config from './config'
import App from './ui/app.jsx'

/* ------------------------------- ENDPOINTS ------------------------------- */

const app = new Koa()

if (config.env !== `test`) app.use(logger())

app.use(serve(`public`))

app.use(views(`${__dirname}/ui`, {extension: `pug`}))

app.use(route.get(`/`, async ctx => {
	await ctx.render(`index`, {
		app: renderApp({registration: {status: `init`, message: ``}, actions: {}}),
		backend: config.backend,
	})
}))

/* -------------------------------- SERVER --------------------------------- */

const server = http.createServer(app.callback())

const io = socketio(server)

io.on(`connection`, socket => {

	socket.on(`register`, (studentId) => {
		if (studentId === `id-not-set`) return socket.emit(`register.failure`, {message: `.id file must exist`})

		setTimeout(() => {
			socket.emit(`register.success`, {message: `${studentId} registered!`})
		}, 2000)
	})

})

server.listen(config.port, () => console.log(`=== SERVER ===: listening at localhost:${config.port}`))

/* -------------------------------- HELPERS -------------------------------- */

function renderApp(props) {
	return ReactDOMServer.renderToString(<App {...props} />)
}