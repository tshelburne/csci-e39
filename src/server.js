import http from 'http'
import Koa from 'koa'
import logger from 'koa-logger'
import route from 'koa-route'
import views from 'koa-views'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import config from './config'
import App from './ui/app.jsx'

/* ------------------------------- ENDPOINTS ------------------------------- */

const app = new Koa()

if (config.env !== `test`) app.use(logger())

app.use(views(`${__dirname}/ui`, {extension: `pug`}))

app.use(route.get(`/`, async ctx => {
	await ctx.render(`index`, {
		app: renderApp({message: `Initial message`}),
	})
}))

/* -------------------------------- SERVER --------------------------------- */

const server = http.createServer(app.callback())

server.listen(config.port, () => console.log(`=== SERVER ===: listening at localhost:${config.port}`))

/* -------------------------------- HELPERS -------------------------------- */

function renderApp(props) {
	return ReactDOMServer.renderToString(<App {...props} />)
}