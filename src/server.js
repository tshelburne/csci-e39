import http from 'http'
import Koa from 'koa'
import route from 'koa-route'
import config from './config'

const app = new Koa()

app.use(route.get(`/`, ctx => {
	ctx.body = `hello world`
}))

const server = http.createServer(app.callback())

server.listen(config.port, () => console.log(`=== SERVER ===: listening at localhost:${config.port}`))