module.exports = {
	devtool: `eval-cheap-module-source-map`,
	entry: `./src/client.js`,
	output: {
		path: `${__dirname}/public/js`,
		filename: `app.js`,
		libraryTarget: `var`,
		library: `MyApp`
	},
	externals: {
		"socket.io": `io`,
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: `babel-loader` }
		]
	}
}
