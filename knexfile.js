const config = require(`./src/config`)

module.exports = {

	development: {
		client: `sqlite3`,
		connection: {
			filename: `./dev.sqlite3`
		},
		migrations: {
			directory: `./src/db/migrations`,
			tableName: `migrations`
		},
		seeds: {
			directory: `./src/db/seeds/`
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
