export const up = knex =>
	knex.schema.createTable(`uploads`, t => {
		t.increments(`id`).unsigned().primary()

		t.integer(`creator_id`).unsigned().notNull().references(`students.id`)
		t.string(`url`).notNull()
		t.string(`name`).nullable()
		t.string(`description`).nullable()
		t.timestamps(true, true)
	}).createTable(`albums`, t => {
		t.increments(`id`).unsigned().primary()
		t.integer(`creator_id`).unsigned().notNull().references(`students.id`)
		t.string(`name`).nullable()
		t.timestamps(true, true)
	}).createTable(`uploads_albums`, t => {
		t.integer(`upload_id`).unsigned().notNull().references(`uploads.id`)
		t.integer(`album_id`).unsigned().notNull().references(`albums.id`)
	})

export const down = knex =>
	knex.schema.dropTable(`uploads_albums`)
	.dropTable(`albums`)
	.dropTable(`uploads`)
