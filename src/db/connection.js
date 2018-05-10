import knex from 'knex'
import bookshelf from 'bookshelf'
import knexConfig from '../../knexfile'
import config from '../config'

const db = bookshelf(knex(knexConfig[config.env]))

export default db
