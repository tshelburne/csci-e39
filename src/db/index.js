import db from './connection'
import {camelCaseify} from '../util/functions'

export const Student = db.Model.extend({
	tableName: `students`,

	uploads() {
		return this.hasMany(Upload, `creator_id`)
	},

	messages() {
		return this.hasMany(Message, `creator_id`)
	},

	serialize() {
		const {unique_id, ...json} = db.Model.prototype.serialize.call(this, ...arguments)
		return camelCaseify(json)
	},
})

export const Message = db.Model.extend({
	tableName: `messages`,

	student() {
		return this.belongsTo(Student, `creator_id`)
	},

	serialize() {
		const json = db.Model.prototype.serialize.call(this, ...arguments)
		return camelCaseify(json)
	},
})

export const Upload = db.Model.extend({
	tableName: `uploads`,

	student() {
		return this.belongsTo(Student, `creator_id`)
	},

	serialize() {
		const json = db.Model.prototype.serialize.call(this, ...arguments)
		return camelCaseify(json)
	},
})

