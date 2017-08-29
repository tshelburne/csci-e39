import config from './src/config'

module.exports = {

	development: {
		client: `sqlite3`,
		connection: {
			filename: `./dev.sqlite3`
		},
		migrations: {
			directory: `./src/db/migrations`,
			tableName: `migrations`
		}
	},

	production: {
		client: `pg`,
		connection: config.db,
		migrations: {
			directory: `./src/db/migrations`,
			tableName: `migrations`
		}
	}

}
