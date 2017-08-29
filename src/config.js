const config = {
	env: process.env.ENV || `dev`,
	studentId: process.env.STUDENT_ID,
	backend: process.env.BACKEND || `localhost:${process.env.PORT}`,
	port: process.env.PORT || 3000,
	db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATA,
	}
}

export default config
