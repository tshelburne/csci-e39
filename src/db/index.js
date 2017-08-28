import db from './connection'

export const Student = db.Model.extend({tableName: `students`})