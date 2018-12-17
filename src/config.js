const PORT = process.env.PORT || 3000

module.exports = {
	env: process.env.NODE_ENV || `development`,
	port: PORT,
	db: process.env.DATABASE_URL,
}
