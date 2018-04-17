export const up = knex =>
	knex.schema.createTable(`messages`, t => {
		t.increments(`id`).unsigned().primary()
		t.string(`unique_id`).notNull()
		t.string(`text`).nullable()
		t.integer(`creator_id`).unsigned().notNull().references(`students.id`)
		t.timestamps(true, true)
	})

export const down = knex =>
	knex.schema.dropTable(`messages`)
