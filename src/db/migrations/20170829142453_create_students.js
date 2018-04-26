export const up = knex =>
	knex.schema.createTable(`students`, t => {
		t.increments(`id`).unsigned().primary()

		t.string(`unique_id`).notNull()
		t.string(`name`).notNull()

		t.timestamps(true, true)
		t.timestamp(`confirmed_at`).nullable()
	})

export const down = knex =>
	knex.schema.dropTable(`students`)
