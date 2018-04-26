import db from './connection'
import {camelCaseify} from '../util/functions'

class Base extends db.Model {

	get hasTimestamps() { return true }

	serialize() { return camelCaseify(super.serialize(...arguments)) }

}

export class Student extends Base {

	get tableName() { return `students` }

	uploads() {
		return this.hasMany(Upload, `creator_id`)
	}

	messages() {
		return this.hasMany(Message, `creator_id`)
	}

	serialize() {
		const {uniqueId, ...json} = super.serialize(...arguments)
		return json
	}
}

export class Message extends Base {

	get tableName() { return `messages` }

	student() {
		return this.belongsTo(Student, `creator_id`)
	}

}

export class Upload extends Base {

	get tableName() { return `uploads` }

	student() {
		return this.belongsTo(Student, `creator_id`)
	}

}
