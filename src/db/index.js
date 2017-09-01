import db from './connection'

export const Student = db.Model.extend({
	tableName: `students`,

	uploads() {
		return this.hasMany(Upload, `creator_id`)
	},

	serialize() {
		const {unique_id, ...json} = db.Model.prototype.serialize.call(this, ...arguments)
		return json
	}
})

export const Upload = db.Model.extend({
	tableName: `uploads`,

	student() {
		return this.belongsTo(Student, `creator_id`)
	},
})