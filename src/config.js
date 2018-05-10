const PORT = process.env.PORT || 3000

module.exports = {
	env: process.env.NODE_ENV || `development`,
	studentId: process.env.STUDENT_ID,
	backend: process.env.BACKEND || `localhost:${PORT}`,
	port: PORT,
	db: process.env.DATABASE_URL,
}
