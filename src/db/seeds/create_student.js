const fs = require(`fs`)
const unique_id = fs.readFileSync(`${__dirname}/../../../.id`).toString().trim()

exports.seed = knex =>
	knex(`students`).del()
		.then(() =>
			knex(`students`).insert([
				{id: 1, unique_id, name: `Test Student`},
			])
		)
