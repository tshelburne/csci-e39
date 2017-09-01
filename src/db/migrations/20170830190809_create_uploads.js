export const up = knex =>
	knex.schema.createTable(`uploads`, t => {
		t.increments(`id`).unsigned().primary()

		t.integer(`creator_id`).unsigned().notNull().references(`students.id`)

		t.string(`url`).notNull()
		t.string(`name`).nullable()
		t.string(`description`).nullable()

		t.timestamps(true, true)
	})

export const down = knex =>
	knex.schema.dropTable(`uploads`)
