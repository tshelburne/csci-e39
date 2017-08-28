import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../config'

const db = bookshelf(knex({
	client: `pg`,
	connection: config.db,
}))

export default db