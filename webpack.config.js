const {DefinePlugin} = require(`webpack`)

const superStringify = str => `'${str}'`

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
	plugins: [
		new DefinePlugin({
			__STUDENT_ID__: superStringify(process.env.STUDENT_ID || `id not set`),
		}),
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: `babel-loader` }
		]
	}
}