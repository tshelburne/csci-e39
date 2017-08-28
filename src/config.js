const config = {
	env: process.env.ENV || `dev`,
	backend: process.env.BACKEND || `localhost:${process.env.PORT}`,
	port: process.env.PORT || 3000,
}

export default config
