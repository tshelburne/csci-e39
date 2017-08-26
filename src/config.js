const config = {
	env: process.env.ENV || `dev`,
	host: process.env.HOST || `localhost`,
	port: process.env.PORT || 3000,
}

export default config
